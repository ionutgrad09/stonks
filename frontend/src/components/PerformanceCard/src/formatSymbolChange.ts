const formatSymbolChange = (change: number, precision = 1) => {
  if (change > 1) {
    return `+${(change * 100 - 100).toFixed(precision)}%`;
  }
  return `${(change * 100 - 100).toFixed(precision)}%`;
};

export default formatSymbolChange;
