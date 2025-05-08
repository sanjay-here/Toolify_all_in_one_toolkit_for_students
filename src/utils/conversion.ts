// Conversion utility functions
export const roundToDecimals = (value: number, decimals: number = 6): number => {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
};

export const formatNumber = (value: number): string => {
  return value.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 6
  });
};