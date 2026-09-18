#!/usr/bin/env node
'use strict';

const { createHash } = require('node:crypto');
const { existsSync, mkdirSync, readFileSync, writeFileSync, readdirSync } = require('node:fs');
const { join, extname, relative, dirname } = require('node:path');
const sharp = require('sharp');
const { optimize } = require('svgo');

const IMAGE_DIRS = ['src/assets/img', 'src/assets/i'];
const CACHE_PATH = 'src/assets/compressed-images.json';
const PNG_JPEG_EXTS = new Set(['.png', '.jpg', '.jpeg']);
const SVG_EXT = '.svg';

function sha256(buf) {
  return createHash('sha256').update(buf).digest('hex');
}

function walk(dir) {
  const results = [];
  if (!existsSync(dir)) return results;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walk(full));
    } else {
      results.push(full);
    }
  }
  return results;
}

function loadCache() {
  try {
    return JSON.parse(readFileSync(CACHE_PATH, 'utf8'));
  } catch {
    return {};
  }
}

function saveCache(cache) {
  mkdirSync(dirname(CACHE_PATH), { recursive: true });
  writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2));
}

async function compressPngJpeg(filePath, input) {
  const ext = extname(filePath).toLowerCase();
  let output;
  if (ext === '.png') {
    output = await sharp(input).png({ quality: 80, compressionLevel: 9 }).toBuffer();
  } else {
    output = await sharp(input).jpeg({ quality: 80, mozjpeg: true }).toBuffer();
  }
  // Only overwrite if we actually saved bytes
  if (output.length < input.length) {
    writeFileSync(filePath, output);
    return { before: input.length, after: output.length, hash: sha256(output) };
  }
  return { before: input.length, after: input.length, hash: sha256(input) };
}

function compressSvg(filePath, input) {
  const inputStr = input.toString('utf8');
  const result = optimize(inputStr, { path: filePath });
  const output = result.data;
  const outputBuf = Buffer.from(output);
  if (outputBuf.length < input.length) {
    writeFileSync(filePath, output, 'utf8');
    return { before: input.length, after: outputBuf.length, hash: sha256(outputBuf) };
  }
  return { before: input.length, after: input.length, hash: sha256(input) };
}

async function main() {
  const cache = loadCache();
  const files = IMAGE_DIRS.flatMap(walk);

  let processed = 0;
  let skipped = 0;
  let totalBefore = 0;
  let totalAfter = 0;

  for (const filePath of files) {
    const ext = extname(filePath).toLowerCase();
    if (!PNG_JPEG_EXTS.has(ext) && ext !== SVG_EXT) continue;

    const content = readFileSync(filePath);
    const currentHash = sha256(content);
    const key = relative(process.cwd(), filePath);

    if (cache[key] === currentHash) {
      skipped++;
      continue;
    }

    let result;
    if (ext === SVG_EXT) {
      result = compressSvg(filePath, content);
    } else {
      result = await compressPngJpeg(filePath, content);
    }

    cache[key] = result.hash;
    totalBefore += result.before;
    totalAfter += result.after;
    processed++;

    const saved = result.before - result.after;
    const pct = ((saved / result.before) * 100).toFixed(1);
    console.log(`  ${key} — saved ${(saved / 1024).toFixed(1)} KB (${pct}%)`);
  }

  saveCache(cache);

  const totalSaved = totalBefore - totalAfter;
  console.log(`\nImages compressed: ${processed}, skipped (cached): ${skipped}`);
  if (processed > 0) {
    console.log(`Total saved: ${(totalSaved / 1024).toFixed(1)} KB`);
  }
}

main().catch((err) => {
  console.error('compress-images failed:', err);
  process.exit(1);
});
