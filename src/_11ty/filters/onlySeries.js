module.exports = (items) => (items || []).filter(i => Number.isFinite(parseInt(i?.data?.series_order, 10)));
