---
permalink: /updates/february-website-improvements/
title: February Website Improvements
author: Eric Steinborn
description: |
  We have shipped a new homepage and contribute page to engage with users. We implemented the nys-unavheader's new search customization on the site, and created links to important resources like the Community Figma file.
thumbnailimage: /assets/i/2026/february-website-improvements-thumbnail.png
tags: article, website, anniversary, contribute
date: 2026-02-19
---

## Happy first birthday NYS Design System!

Thanks to Kevin Luddy for the perfect birthday badge for our one year anniversary!

<div class="badge-container">
<svg id="badgeSvg" xmlns="http://www.w3.org/2000/svg" viewBox="-15 -15 447.50273 447.50273">
<defs>
<!-- ============================================ -->
<!-- LOGO SHADOW GRADIENT (reverse wave - fades OUT) -->
<!-- Stop opacities driven by JS updateShadowWaves() -->
<!-- ============================================ -->
<linearGradient id="logoShadowGrad" gradientUnits="userSpaceOnUse" x1="49.9" y1="49.9" x2="414.1" y2="414.1">
<stop offset="0%" stop-color="#0E324F" stop-opacity="1" class="logo-stop" />
<stop offset="10%" stop-color="#0E324F" stop-opacity="1" class="logo-stop" />
<stop offset="20%" stop-color="#0E324F" stop-opacity="1" class="logo-stop" />
<stop offset="30%" stop-color="#0E324F" stop-opacity="1" class="logo-stop" />
<stop offset="40%" stop-color="#0E324F" stop-opacity="1" class="logo-stop" />
<stop offset="50%" stop-color="#0E324F" stop-opacity="1" class="logo-stop" />
<stop offset="60%" stop-color="#0E324F" stop-opacity="1" class="logo-stop" />
<stop offset="70%" stop-color="#0E324F" stop-opacity="1" class="logo-stop" />
<stop offset="80%" stop-color="#0E324F" stop-opacity="1" class="logo-stop" />
<stop offset="90%" stop-color="#0E324F" stop-opacity="1" class="logo-stop" />
<stop offset="100%" stop-color="#0E324F" stop-opacity="1" class="logo-stop" />
</linearGradient>
<!-- ============================================ -->
<!-- BADGE "1" SHADOW GRADIENT (wave fades IN)    -->
<!-- Stop opacities driven by JS updateShadowWaves() -->
<!-- ============================================ -->
<linearGradient id="badgeShadowGrad" gradientTransform="rotate(30)">
<stop offset="0%" stop-color="#0E324F" stop-opacity="0" class="badge-stop" />
<stop offset="10%" stop-color="#0E324F" stop-opacity="0" class="badge-stop" />
<stop offset="20%" stop-color="#0E324F" stop-opacity="0" class="badge-stop" />
<stop offset="30%" stop-color="#0E324F" stop-opacity="0" class="badge-stop" />
<stop offset="40%" stop-color="#0E324F" stop-opacity="0" class="badge-stop" />
<stop offset="50%" stop-color="#0E324F" stop-opacity="0" class="badge-stop" />
<stop offset="60%" stop-color="#0E324F" stop-opacity="0" class="badge-stop" />
<stop offset="70%" stop-color="#0E324F" stop-opacity="0" class="badge-stop" />
<stop offset="80%" stop-color="#0E324F" stop-opacity="0" class="badge-stop" />
<stop offset="90%" stop-color="#0E324F" stop-opacity="0" class="badge-stop" />
<stop offset="100%" stop-color="#0E324F" stop-opacity="0" class="badge-stop" />
</linearGradient>
</defs>
<!-- ============================================ -->
<!-- MORPHING CLIP PATH: circle → scallops        -->
<!-- ============================================ -->
<clipPath id="clippath">
<path id="morphPath" d="M192.31504,11.58231C203.25362,10.67045,214.24911,10.67045,225.18769,11.58231C234.90734,12.39255,244.55376,13.92040,254.04808,16.15334C264.73307,18.66632,275.19041,22.06412,285.31183,26.31155C294.30539,30.08567,303.00756,34.51965,311.34717,39.57721C320.73264,45.26904,329.62819,51.73203,337.94171,58.89928C345.32881,65.26785,352.23489,72.17393,358.60346,79.56103C365.77071,87.87455,372.23370,96.77010,377.92553,106.15557C382.98309,114.49518,387.41707,123.19735,391.19119,132.19091C395.43862,142.31233,398.83642,152.76967,401.34940,163.45466C403.58234,172.94898,405.11019,182.59540,405.92043,192.31505C406.83229,203.25363,406.83229,214.24912,405.92043,225.18770C405.11018,234.90735,403.58234,244.55377,401.34939,254.04809C398.83642,264.73308,395.43862,275.19042,391.19118,285.31184C387.41706,294.30540,382.98309,303.00757,377.92552,311.34717C372.23369,320.73265,365.77070,329.62819,358.60345,337.94171C352.23489,345.32882,345.32881,352.23490,337.94170,358.60346C329.62818,365.77071,320.73264,372.23370,311.34717,377.92553C303.00756,382.98309,294.30539,387.41707,285.31183,391.19119C275.19040,395.43862,264.73307,398.83642,254.04808,401.34940C244.55376,403.58234,234.90734,405.11019,225.18769,405.92043C214.24911,406.83229,203.25362,406.83229,192.31504,405.92043C182.59539,405.11018,172.94897,403.58234,163.45465,401.34939C152.76967,398.83642,142.31233,395.43862,132.19090,391.19119C123.19735,387.41707,114.49518,382.98309,106.15557,377.92552C96.77010,372.23370,87.87455,365.77071,79.56103,358.60346C72.17393,352.23489,65.26785,345.32881,58.89928,337.94171C51.73203,329.62819,45.26904,320.73264,39.57722,311.34717C34.51965,303.00756,30.08567,294.30539,26.31155,285.31184C22.06412,275.19041,18.66632,264.73307,16.15335,254.04809C13.92040,244.55377,12.39256,234.90735,11.58231,225.18770C10.67045,214.24912,10.67045,203.25363,11.58231,192.31505C12.39255,182.59540,13.92040,172.94898,16.15334,163.45466C18.66632,152.76967,22.06412,142.31234,26.31155,132.19091C30.08567,123.19735,34.51965,114.49518,39.57721,106.15557C45.26904,96.77010,51.73203,87.87456,58.89928,79.56104C65.26784,72.17393,72.17392,65.26785,79.56103,58.89929C87.87455,51.73204,96.77009,45.26905,106.15557,39.57722C114.49517,34.51965,123.19734,30.08568,132.19090,26.31156C142.31232,22.06412,152.76966,18.66632,163.45465,16.15335C172.94897,13.92040,182.59539,12.39256,192.31504,11.58231Z">
<!-- Morph: circle → scallops (timing set by JS) -->
<animate id="morphAnim" attributeName="d" from="M192.31504,11.58231C203.25362,10.67045,214.24911,10.67045,225.18769,11.58231C234.90734,12.39255,244.55376,13.92040,254.04808,16.15334C264.73307,18.66632,275.19041,22.06412,285.31183,26.31155C294.30539,30.08567,303.00756,34.51965,311.34717,39.57721C320.73264,45.26904,329.62819,51.73203,337.94171,58.89928C345.32881,65.26785,352.23489,72.17393,358.60346,79.56103C365.77071,87.87455,372.23370,96.77010,377.92553,106.15557C382.98309,114.49518,387.41707,123.19735,391.19119,132.19091C395.43862,142.31233,398.83642,152.76967,401.34940,163.45466C403.58234,172.94898,405.11019,182.59540,405.92043,192.31505C406.83229,203.25363,406.83229,214.24912,405.92043,225.18770C405.11018,234.90735,403.58234,244.55377,401.34939,254.04809C398.83642,264.73308,395.43862,275.19042,391.19118,285.31184C387.41706,294.30540,382.98309,303.00757,377.92552,311.34717C372.23369,320.73265,365.77070,329.62819,358.60345,337.94171C352.23489,345.32882,345.32881,352.23490,337.94170,358.60346C329.62818,365.77071,320.73264,372.23370,311.34717,377.92553C303.00756,382.98309,294.30539,387.41707,285.31183,391.19119C275.19040,395.43862,264.73307,398.83642,254.04808,401.34940C244.55376,403.58234,234.90734,405.11019,225.18769,405.92043C214.24911,406.83229,203.25362,406.83229,192.31504,405.92043C182.59539,405.11018,172.94897,403.58234,163.45465,401.34939C152.76967,398.83642,142.31233,395.43862,132.19090,391.19119C123.19735,387.41707,114.49518,382.98309,106.15557,377.92552C96.77010,372.23370,87.87455,365.77071,79.56103,358.60346C72.17393,352.23489,65.26785,345.32881,58.89928,337.94171C51.73203,329.62819,45.26904,320.73264,39.57722,311.34717C34.51965,303.00756,30.08567,294.30539,26.31155,285.31184C22.06412,275.19041,18.66632,264.73307,16.15335,254.04809C13.92040,244.55377,12.39256,234.90735,11.58231,225.18770C10.67045,214.24912,10.67045,203.25363,11.58231,192.31505C12.39255,182.59540,13.92040,172.94898,16.15334,163.45466C18.66632,152.76967,22.06412,142.31234,26.31155,132.19091C30.08567,123.19735,34.51965,114.49518,39.57721,106.15557C45.26904,96.77010,51.73203,87.87456,58.89928,79.56104C65.26784,72.17393,72.17392,65.26785,79.56103,58.89929C87.87455,51.73204,96.77009,45.26905,106.15557,39.57722C114.49517,34.51965,123.19734,30.08568,132.19090,26.31156C142.31232,22.06412,152.76966,18.66632,163.45465,16.15335C172.94897,13.92040,182.59539,12.39256,192.31504,11.58231Z" to="M192.31504,11.58231C201.35502,17.29170,216.14771,17.29170,225.18769,11.58231C234.22768,5.87292,247.21485,7.92988,254.04808,16.15335C260.88131,24.37680,274.94999,28.94800,285.31183,26.31156C295.67366,23.67512,307.38956,29.64467,311.34717,39.57722C315.30477,49.50978,327.27231,58.20471,337.94170,58.89929C348.61109,59.59387,357.90888,68.89165,358.60345,79.56104C359.29802,90.23043,367.99295,102.19797,377.92552,106.15557C387.85808,110.11317,393.82762,121.82907,391.19118,132.19091C388.55474,142.55274,393.12594,156.62142,401.34939,163.45466C409.57285,170.28790,411.62981,183.27507,405.92043,192.31505C400.21105,201.35502,400.21104,216.14772,405.92043,225.18770C411.62982,234.22769,409.57286,247.21485,401.34939,254.04809C393.12594,260.88132,388.55474,274.95000,391.19118,285.31184C393.82762,295.67367,387.85807,307.38957,377.92552,311.34717C367.99296,315.30478,359.29803,327.27232,358.60345,337.94171C357.90887,348.61110,348.61109,357.90889,337.94170,358.60346C327.27231,359.29804,315.30477,367.99296,311.34717,377.92553C307.38957,387.85808,295.67367,393.82763,285.31183,391.19119C274.95000,388.55475,260.88132,393.12595,254.04808,401.34940C247.21485,409.57286,234.22767,411.62982,225.18769,405.92044C216.14771,400.21105,201.35502,400.21105,192.31504,405.92044C183.27505,411.62983,170.28789,409.57287,163.45465,401.34940C156.62142,393.12595,142.55274,388.55475,132.19090,391.19119C121.82907,393.82763,110.11317,387.85808,106.15557,377.92553C102.19797,367.99297,90.23042,359.29804,79.56103,358.60346C68.89164,357.90888,59.59385,348.61110,58.89928,337.94171C58.20470,327.27232,49.50978,315.30477,39.57721,311.34717C29.64466,307.38957,23.67511,295.67368,26.31155,285.31184C28.94799,274.95001,24.37679,260.88133,16.15334,254.04809C7.92988,247.21485,5.87292,234.22768,11.58230,225.18770C17.29168,216.14773,17.29169,201.35503,11.58230,192.31505C5.87291,183.27506,7.92987,170.28789,16.15334,163.45466C24.37680,156.62143,28.94799,142.55275,26.31155,132.19091C23.67511,121.82908,29.64466,110.11318,39.57721,106.15557C49.50977,102.19797,58.20470,90.23043,58.89928,79.56104C59.59386,68.89165,68.89164,59.59386,79.56103,58.89929C90.23042,58.20471,102.19797,49.50979,106.15557,39.57722C110.11317,29.64467,121.82906,23.67512,132.19090,26.31156C142.55273,28.94800,156.62141,24.37680,163.45465,16.15335C170.28789,7.92989,183.27506,5.87293,192.31504,11.58231Z" dur="4s" begin="indefinite" fill="freeze" calcMode="spline" keyTimes="0;1" keySplines="0.25 0.1 0.25 1" />
</path>
</clipPath>
<!-- ============================================ -->
<!-- MAIN BADGE GROUP                             -->
<!-- ============================================ -->
<g id="badge">
<!-- Invisible hit target -->
<rect x="-15" y="-15" width="447.50273" height="447.50273" fill="transparent" />
<!-- ============================================ -->
<!-- CLIP GROUP: spins 5s–17s (JS-driven)         -->
<!-- ============================================ -->
<g id="clipGroup" clip-path="url(#clippath)">
<!-- ============================================ -->
<!-- COUNTER-ROTATE: cancels clip spin (JS)       -->
<!-- ============================================ -->
<g id="counterGroup">
<!-- Blue background -->
<rect x="-15" y="-15" width="447.50273" height="447.50273" fill="#245FC2" />
<!-- ============================================ -->
<!-- LOGO SHADOW (wave dissolves 2s–5s)           -->
<!-- Centered: translate by (8.75, 8.25)          -->
<!-- ============================================ -->
<g transform="translate(8.75, 8.25)">
<path d="M400 177.982V177.717L311.472 88.5752V315.576H254.744V185.429L80.1399 360.098L80.1417 360.1L40.2449 400H400.003V177.982H400Z" fill="url(#logoShadowGrad)" />
<path d="M214.604 145.481L149.581 210.53L84.5566 145.481H214.604Z" fill="url(#logoShadowGrad)" />
</g>
<!-- ============================================ -->
<!-- BADGE "1" SHADOW (wave fades in 12s–15s)     -->
<!-- Z-ORDER: BELOW the "1" and content spin      -->
<!-- ============================================ -->
<g transform="translate(-34.84, -34.84)">
<path d="M482.48047,447.47295v-.69679h-.69691v-.69685h-.69679v-.69679h-.69691v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69691v-.69679h-.69679v-.69685h-.69691v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69691v-.69679h-.69679v-.69685h-.69691v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69691v-.69685h-.69679v-.69679h-.69691v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69691v-.69679h-.69679v-.69685h-.69691v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69691v-.69679h-.69679v-.69685h-.69691v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69691v-.69685h-.69679v-.69679h-.69691v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69691v-.69679h-.69679v-.69685h-.69691v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69691v-.69679h-.69679v-.69685h-.69691v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.02304l125.50899-12.89352-126.20578-125.50899v-.69685h-.69691v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69691v-.69679h-.69679v-.69685h-.69679v-.69679h-.69691v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69691v-.69679h-.69679v-.69685h-.69691v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69691v-.69679h-.69679v-.69685h-.69691v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69691v-.69679h-.69679v-.69685h-.69679v-.69679h-.69691v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69691v-.69679h-.69679v-.69685h-.69691v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69691v-.69679h-.69679v-.69685h-.69691v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69691v-.69679h-.69679v-.69685h-.69679v-.69679h-.69691v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69691v-.69679h-.69679v-.69685h-.69691v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69691v-.69679h-.69679v-.69685h-.69691v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69691v-.69679h-.69679v-.69685h-.69679v-.69679h-.69691v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69691v-.69679h-.69679v-.69685h-.69691v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69691v-.69679h-.69679v-.69685h-.69691v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69691v-.69679h-.69679v-.69685h-.69679v-.69679h-.69691v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69691v-.69679h-.69679v-.69685h-.69691v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69691v-.69679h-.69679v-.69685h-.69691v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69691v-.69679h-.69679v-.69685h-.69679v-.69679h-.69691v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69691v-.69679h-.69679v-.69685h-.69691v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69691v-.69679h-.69679v-.69685h-.69691v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69691v-.69679h-.69679v-.69685h-.69679v-.69679h-.69691v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69691v-.69679h-.69679v-.69685h-.69691v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69691v-.69679h-.69679v-.69685h-.69691v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69691v-.69679h-.69679v-.69685h-.69679v-.69679h-.69691v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69691v-.69679h-.69679v-.69685h-.69691v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69691v-.69679h-.69679v-.69685h-.69691v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69691v-.69679h-.69679v-.69685h-.69679v-.69679h-.69691v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69691v-.69679h-.69679v-.69685h-.69691v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69679v-.69679h-.69679v-.69685h-.69691v-.69679h-42.35401c-13.14425,21.17694-41.25791,38.095-84.34249,50.75152v51.29951c.22659-.09333.4676-.19889.69679-.29435v.99114c.22659-.09333.46772-.19895.69679-.29435v.99119c.22659-.09333.46772-.19889.69679-.29435v.99114c.22671-.09333.46783-.19895.69679-.29435v.99119c.22671-.09333.46783-.19889.69691-.29435v.99114c.22671-.09333.46772-.19895.69679-.29435v.99119c.22671-.09333.46772-.19889.69691-.29435v.99114c.22659-.09333.4676-.19895.69679-.29435v.99119c.22659-.09333.4676-.19889.69679-.29435v.99114c.22659-.09333.46772-.19895.69679-.29435v.99119c.22659-.09333.46772-.19889.69679-.29435v.99114c.22671-.09333.46783-.19895.69679-.29435v.99119c.22671-.09333.46783-.19889.69691-.29435v.99114c.22671-.09333.46772-.19895.69679-.29435v.99119c.22671-.09333.46772-.19889.69691-.29435v.99114c.22659-.09333.4676-.19895.69679-.29435v.99119c.22659-.09333.4676-.19889.69679-.29435v.99114c.22659-.09333.46772-.19895.69679-.29435v.99119c.22659-.09333.46772-.19889.69679-.29435v.99114c.22671-.09333.46783-.19895.69679-.29435v.99114c.22671-.09333.46783-.19889.69691-.29435v.99119c.22671-.09333.46772-.19895.69679-.29435v.99114c.22671-.09333.46772-.19895.69679-.29435v.99119c.22671-.09333.46772-.19889.69691-.29435v.99114c.22659-.09333.4676-.19895.69679-.29435v.99119c.22659-.09333.4676-.19889.69679-.29435v.99114c.22659-.09333.46772-.19895.69679-.29435v.99119c.22659-.09333.46772-.19889.69679-.29435v.99114c.22671-.09333.46783-.19895.69679-.29435v.99119c.22671-.09333.46783-.19889.69691-.29435v.99114c.22671-.09333.46772-.19895.69679-.29435v.99119c.22671-.09333.46772-.19889.69691-.29435v.99114c.22659-.09333.4676-.19895.69679-.29435v.99119c.22659-.09333.4676-.19889.69679-.29435v.99114c.22659-.09333.46772-.19895.69679-.29435v.99119c.22659-.09333.46772-.19889.69679-.29435v.99114c.22671-.09333.46783-.19895.69679-.29435v.99119c.22671-.09333.46783-.19889.69691-.29435v.99114c.22671-.09333.46772-.19895.69679-.29435v.99119c.22671-.09333.46772-.19889.69691-.29435v.99114c.22659-.09333.4676-.19895.69679-.29435v.99119c.22659-.09333.4676-.19889.69679-.29435v.99114c.22659-.09333.46772-.19895.69679-.29435v.99119c.22659-.09333.46772-.19889.69679-.29435v.99114c.22671-.09333.46783-.19895.69679-.29435v.99114c.22671-.09333.46783-.19889.69691-.29435v.99119c.22671-.09333.46772-.19895.69679-.29435v.99114c.22671-.09333.46772-.19895.69679-.29435v.99119c.22671-.09333.46772-.19889.69691-.29435v.99114c.22659-.09333.4676-.19895.69679-.29435v.99119c.22659-.09333.4676-.19889.69679-.29435v.99114c.22659-.09333.46772-.19895.69679-.29435v.99119c.22659-.09333.46772-.19889.69679-.29435v.99114c.22671-.09333.46783-.19895.69679-.29435v.99119c.22671-.09333.46783-.19889.69691-.29435v.99114c.22671-.09333.46772-.19895.69679-.29435v.99119c.22671-.09333.46772-.19889.69691-.29435v.99114c.22659-.09333.4676-.19895.69679-.29435v.99119c.22659-.09333.4676-.19889.69679-.29435v.99114c.22659-.09333.46772-.19895.69679-.29435v.99119c.22659-.09333.46772-.19889.69679-.29435v.99114c.22671-.09333.46783-.19895.69679-.29435v.99119c.22671-.09333.46783-.19889.69691-.29435v.99114c.22671-.09333.46772-.19895.69679-.29435v.99119c.22671-.09333.46772-.19889.69691-.29435v.99114c.22659-.09333.4676-.19895.69679-.29435v.99119c.22659-.09333.4676-.19889.69679-.29435v.99114c.22659-.09333.46772-.19895.69679-.29435v.99119c.22659-.09333.46772-.19889.69679-.29435v.99114c.22671-.09333.46783-.19895.69679-.29435v.99114c.22671-.09333.46783-.19889.69691-.29435v.99119c.22671-.09333.46772-.19895.69679-.29435v.99114c.22671-.09333.46772-.19895.69679-.29435v.99119c.22671-.09333.46772-.19889.69691-.29435v.99114c.22659-.09333.4676-.19895.69679-.29435v.99119c.22659-.09333.4676-.19889.69679-.29435v.99114c.22659-.09333.46772-.19895.69679-.29435v.99119c.22659-.09333.46772-.19889.69679-.29435v.99114c.22671-.09333.46783-.19895.69679-.29435v.99119c.22671-.09333.46783-.19889.69691-.29435v.99114c.22671-.09333.46772-.19895.69679-.29435v.99119c.22671-.09333.46772-.19889.69691-.29435v.99114c.22659-.09333.4676-.19895.69679-.29435v.99119c.22659-.09333.4676-.19889.69679-.29435v.99114c.22659-.09333.46772-.19895.69679-.29435v.99119c.22659-.09333.46772-.19889.69679-.29435v.99114c.22671-.09333.46783-.19895.69679-.29435v.99119c.22671-.09333.46783-.19889.69691-.29435v.99114c.22671-.09333.46772-.19895.69679-.29435v.99119c.22671-.09333.46772-.19889.69691-.29435v.99114c.22659-.09333.4676-.19895.69679-.29435v.99119c.22659-.09333.4676-.19889.69679-.29435v.99114c.22659-.09333.46772-.19895.69679-.29435v.99119c.22659-.09333.46772-.19889.69679-.29435v.99114c.22671-.09333.46783-.19895.69679-.29435v.99114c.22671-.09333.46783-.19889.69691-.29435v.99119c.22671-.09333.46772-.19895.69679-.29435v.99114c.22671-.09333.46772-.19895.69679-.29435v.99119c.22671-.09333.46772-.19889.69691-.29435v.99114c.12617-.05198.26121-.11141.38821-.16404v36.51553h-75.57958v51.89027h.69679v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69679v.69679h.69691v.69685h.69679v.69679h.69691v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69691v.69685h.69679v.69679h.69691v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69691v.69685h.69679v.69679h.69691v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69679v.69679h.69691v.69685h.69679v.69679h.69691v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69691v.69685h.69679v.69679h.69691v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69691v.69685h.69679v.69679h.69691v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69679v.69679h.69691v.69685h.69679v.69679h.69691v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69691v.69685h.69679v.69679h.69691v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69691v.69685h.69679v.69679h.69691v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69679v.69679h.69691v.69685h.69679v.69679h.69691v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69691v.69685h.69679v.69679h.69691v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69691v.69685h.69679v.69679h.69691v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69679v.69679h.69691v.69685h.69679v.69679h.69691v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69691v.69685h.69679v.69679h.69691v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69691v.69685h.69679v.69679h.69691v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69679v.69679h.69691v.69685h.69679v.69679h.69691v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69691v.69685h.69679v.69679h.69691v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69691v.69685h.69679v.69679h.69691v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69679v.69679h.69691v.69685h.69679v.69679h.69691v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69691v.69685h.69679v.69679h.69691v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69691v.69685h.69679v.69679h.69691v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69679v.69679h.69691v.69685h.69679v.69679h.69691v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69679v.69685h.69679v.69679h.69691v.69685h.69679v.69679h.69691v.69685h.69679v.69679h201.9109v-51.89027h-.69679Z" fill="url(#badgeShadowGrad)" />
</g>
<!-- ============================================ -->
<!-- CONTENT SPIN GROUP (arrow + "1")             -->
<!-- Spins 5s–12s (JS-driven)                     -->
<!-- ============================================ -->
<g id="contentGroup">
<!-- WHITE ARROW (fades out at crossfade ~8s) -->
<g transform="translate(8.75, 8.25)">
<path id="arrowPath" d="M84.556 145.474H214.604L0 360.223V400.149H40.2418L80.14 360.247L254.744 185.578V315.725H311.472V88.873H84.556V145.474Z" fill="white" />
</g>
<!-- WHITE "1" (fades in at crossfade ~8s) -->
<path id="onePath" d="M113.26827,167.93204v-51.29952c43.08464-12.65649,71.19825-29.57453,84.34259-50.75151h42.35396v207.3875h69.00797v51.89025H107.06187v-51.89025h75.5797v-142.57874c-29.69791,18.01362-52.82235,30.42728-69.37331,37.24228Z" fill="#ffffff" opacity="0" />
</g>
</g>
</g>
</g>
</svg>
<div class="controls">
<button onclick="replay()">Play</button>
<span class="time-display" id="timeDisplay">0.0s</span>
</div>
</div>

## New homepage

We've redesigned the homepage to better reflect the work being done on the design system. We've added sections with quick access to popular features like design tokens, and typography. We list the latest updates so you can keep track of releases right from the homepage. More improvements to come!

## Quicker access to the things you need

Improved the search function on the website to fit into the unav header (top white bar on this page). This allowed us to remove a separate search link in the header and implements the unified unav search pattern.

## New contribute page

There are multiple ways to contribute to the NYS Design System. Our new [contributing page](/get-started/contribute) provides multiple ways you can contribute to the NYS Design System. We've included links for requesting new components and enhancements, links for reporting bugs, and a link to join the conversation in our MS Teams channel. We love contributions!


<style>
.badge-container { width: 500px; max-width: 90vw; }
.controls.hidden { display: none; }
button {
padding: 0.6rem 1.4rem;
border: 1px solid #286ad8;
background: transparent;
color: #286ad8;
border-radius: 6px;
cursor: pointer;
font-size: 0.9rem;
transition: all 0.2s;
}
button:hover { background: #286ad8; color: #fff; }
.caption {
margin-top: 1.5rem;
font-size: 0.85rem;
color: #5a5a5a;
text-align: center;
}
.time-display {
font-size: 0.8rem;
color: #5a5a5a;
font-variant-numeric: tabular-nums;
min-width: 4em;
}

.controls {
margin-top: 1rem;
display: flex;
gap: 1rem;
align-items: center;
flex-direction: column;
}
</style>
<script>
// ═══════════════════════════════════════════════
// CONFIG
// ═══════════════════════════════════════════════
const SHOW_CONTROLS = true; // false = hide replay button, timer, caption
const TEMPO = 0.875;
const START_ARROW_FADE = 1.0 * TEMPO;
const FINISH_ARROW_FADE = 5.0 * TEMPO;
const START_ARROW_SPIN = 3.0 * TEMPO;
const CROSSFADE_ARROW_TO_ONE = 8.0 * TEMPO;
const CROSSFADE_RATE = 0.3 * TEMPO;
const START_SCALLOP_MORPH = 9.0 * TEMPO;
const FINISH_ONE_SPIN = 12.0 * TEMPO;
const START_ONE_FADE = 12.0 * TEMPO;
const FINISH_SCALLOP_MORPH = 13.0 * TEMPO;
const FINISH_ONE_FADE = 15.0 * TEMPO;
const FINISH_CLIPPING_SPIN = 18.0 * TEMPO;
const ACCEL_DURATION = CROSSFADE_ARROW_TO_ONE - START_ARROW_SPIN; // 4s * TEMPO
const CONTENT_DECEL_DURATION = FINISH_ONE_SPIN - CROSSFADE_ARROW_TO_ONE; // 4s * TEMPO
const CLIP_ACCEL_DURATION = 2 * TEMPO;
const CLIP_DECEL_DURATION =
FINISH_CLIPPING_SPIN - (START_ARROW_SPIN + CLIP_ACCEL_DURATION);
const TOTAL_ROTATIONS = 12;
const PEAK_OMEGA =
(TOTAL_ROTATIONS * 360) / (ACCEL_DURATION / 4 + CONTENT_DECEL_DURATION / 2);
const CX = 208.75137,
CY = 208.75137;
const SHADOW_STOP_COUNT = 11; // 0% to 100% in 10% steps
const SHADOW_FADE_DUR = 0.5 * TEMPO; // each stop's fade duration
const ARROW_WAVE_SPACING =
(FINISH_ARROW_FADE - START_ARROW_FADE - SHADOW_FADE_DUR) /
(SHADOW_STOP_COUNT - 1);
const BADGE_WAVE_SPACING =
(FINISH_ONE_FADE - START_ONE_FADE - SHADOW_FADE_DUR) /
(SHADOW_STOP_COUNT - 1);
let clipGroup, counterGroup, contentGroup, arrowPath, onePath;
let logoStops = []; // arrow shadow gradient stops
let badgeStops = []; // "1" shadow gradient stops
let morphAnim; // SMIL morph element
let morphTriggered = false;
function getElements() {
clipGroup = document.getElementById("clipGroup");
counterGroup = document.getElementById("counterGroup");
contentGroup = document.getElementById("contentGroup");
arrowPath = document.getElementById("arrowPath");
onePath = document.getElementById("onePath");
morphAnim = document.getElementById("morphAnim");
logoStops = Array.from(document.querySelectorAll(".logo-stop"));
badgeStops = Array.from(document.querySelectorAll(".badge-stop"));
}
// ═══════════════════════════════════════════════
// SHADOW WAVE UPDATES (replaces SMIL)
// ═══════════════════════════════════════════════
function updateShadowWaves(t) {
// Arrow shadow: each stop fades 1->0
for (let i = 0; i < SHADOW_STOP_COUNT; i++) {
const triggerTime = START_ARROW_FADE + i * ARROW_WAVE_SPACING;
let opacity;
if (t < triggerTime) {
opacity = 1;
} else if (t < triggerTime + SHADOW_FADE_DUR) {
opacity = 1 - (t - triggerTime) / SHADOW_FADE_DUR;
} else {
opacity = 0;
}
logoStops[i].setAttribute("stop-opacity", String(opacity));
}
// Badge "1" shadow: each stop fades 0->1
for (let i = 0; i < SHADOW_STOP_COUNT; i++) {
const triggerTime = START_ONE_FADE + i * BADGE_WAVE_SPACING;
let opacity;
if (t < triggerTime) {
opacity = 0;
} else if (t < triggerTime + SHADOW_FADE_DUR) {
opacity = (t - triggerTime) / SHADOW_FADE_DUR;
} else {
opacity = 1;
}
badgeStops[i].setAttribute("stop-opacity", String(opacity));
}
}
// ═══════════════════════════════════════════════
// MORPH (SMIL, triggered by JS at scaled time)
// ═══════════════════════════════════════════════
function updateMorph(t) {
if (!morphTriggered && t >= START_SCALLOP_MORPH) {
const morphDur = FINISH_SCALLOP_MORPH - START_SCALLOP_MORPH;
morphAnim.setAttribute("dur", morphDur + "s");
morphAnim.beginElement();
morphTriggered = true;
}
}
// ═══════════════════════════════════════════════
// SPIN PHYSICS
// ═══════════════════════════════════════════════
function getContentAngle(t) {
if (t < START_ARROW_SPIN) return 0;
const elapsed = t - START_ARROW_SPIN;
const totalDur = FINISH_ONE_SPIN - START_ARROW_SPIN;
if (elapsed >= totalDur) {
return computeAngleAtEnd("content");
}
if (elapsed <= ACCEL_DURATION) {
const progress = elapsed / ACCEL_DURATION;
return ((PEAK_OMEGA * ACCEL_DURATION) / 4) * Math.pow(progress, 4);
} else {
const accelAngle = (PEAK_OMEGA * ACCEL_DURATION) / 4;
const decelElapsed = elapsed - ACCEL_DURATION;
const decelAngle =
PEAK_OMEGA * decelElapsed -
0.5 * (PEAK_OMEGA / CONTENT_DECEL_DURATION) * decelElapsed * decelElapsed;
return accelAngle + decelAngle;
}
}
function getClipAngle(t) {
if (t < START_ARROW_SPIN) return 0;
const elapsed = t - START_ARROW_SPIN;
const totalDur = FINISH_CLIPPING_SPIN - START_ARROW_SPIN;
if (elapsed >= totalDur) {
return computeAngleAtEnd("clip");
}
if (elapsed <= CLIP_ACCEL_DURATION) {
const progress = elapsed / CLIP_ACCEL_DURATION;
return ((PEAK_OMEGA * CLIP_ACCEL_DURATION) / 4) * Math.pow(progress, 4);
} else {
const accelAngle = (PEAK_OMEGA * CLIP_ACCEL_DURATION) / 4;
const decelElapsed = elapsed - CLIP_ACCEL_DURATION;
const progress = decelElapsed / CLIP_DECEL_DURATION;
const decelAngle =
((PEAK_OMEGA * CLIP_DECEL_DURATION) / 4) *
(1 - Math.pow(1 - progress, 4));
return accelAngle + decelAngle;
}
}
function computeAngleAtEnd(type) {
if (type === "clip") {
return (
(PEAK_OMEGA * CLIP_ACCEL_DURATION) / 4 +
(PEAK_OMEGA * CLIP_DECEL_DURATION) / 4
);
}
return (
(PEAK_OMEGA * ACCEL_DURATION) / 4 +
(PEAK_OMEGA * CONTENT_DECEL_DURATION) / 2
);
}
// ═══════════════════════════════════════════════
// CROSSFADE (arrow -> "1")
// ═══════════════════════════════════════════════
function updateCrossfade(t) {
if (t < CROSSFADE_ARROW_TO_ONE) {
arrowPath.setAttribute("opacity", "1");
onePath.setAttribute("opacity", "0");
} else if (t < CROSSFADE_ARROW_TO_ONE + CROSSFADE_RATE) {
const progress = (t - CROSSFADE_ARROW_TO_ONE) / CROSSFADE_RATE;
arrowPath.setAttribute("opacity", String(1 - progress));
onePath.setAttribute("opacity", String(progress));
} else {
arrowPath.setAttribute("opacity", "0");
onePath.setAttribute("opacity", "1");
}
}
// ═══════════════════════════════════════════════
// ANIMATION LOOP
// ═══════════════════════════════════════════════
let startTime = null;
let animId = null;
function animate(timestamp) {
if (!startTime) startTime = timestamp;
const t = (timestamp - startTime) / 1000;
document.getElementById("timeDisplay").textContent = t.toFixed(1) + "s";
// Spin transforms
const clipAngle = getClipAngle(t);
const contentAngle = getContentAngle(t);
clipGroup.setAttribute("transform", `rotate(${clipAngle} ${CX} ${CY})`);
counterGroup.setAttribute("transform", `rotate(${-clipAngle} ${CX} ${CY})`);
contentGroup.setAttribute("transform", `rotate(${contentAngle} ${CX} ${CY})`);
// Shadow waves
updateShadowWaves(t);
// Morph trigger
updateMorph(t);
// Crossfade
updateCrossfade(t);
// Keep running until everything is done
if (t < FINISH_CLIPPING_SPIN + 1) {
  animId = requestAnimationFrame(animate);
} else {
  animId = null;
  document.querySelector('.controls button').textContent = 'Replay';
}
}
function startAnimation() {
getElements();
morphTriggered = false;
startTime = null;
if (animId) cancelAnimationFrame(animId);
// Apply controls visibility
if (!SHOW_CONTROLS) {
document.querySelector(".controls").classList.add("hidden");
document.querySelector(".caption").classList.add("hidden");
}
animId = requestAnimationFrame(animate);
}
function replay() {
  const btn = document.querySelector('.controls button');
  if (animId) {
    // Animation is running — stop it
    cancelAnimationFrame(animId);
    animId = null;
    btn.textContent = 'Replay';
  } else {
    // Animation is stopped — restart it
    const svg = document.getElementById("badgeSvg");
    const container = svg.parentElement;
    const clone = svg.cloneNode(true);
    clone.id = "badgeSvg";
    container.replaceChild(clone, svg);
    startAnimation();
    btn.textContent = 'Stop';
  }
}
window.addEventListener("load", function() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReducedMotion) {
    startAnimation();
  }
});
</script>

<script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.4/dist/confetti.browser.min.js"></script>
<script>
var duration = 2.5 * 1000;
var animationEnd = Date.now() + duration;
var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0, disableForReducedMotion: true };
function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}
var interval = setInterval(function() {
  var timeLeft = animationEnd - Date.now();
  if (timeLeft <= 0) {
    return clearInterval(interval);
  }
  var particleCount = 50 * (timeLeft / duration);
  // since particles fall down, start a bit higher than random
  confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
  confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
}, 250);
</script>