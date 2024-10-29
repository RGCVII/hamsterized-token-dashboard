export const formatTokenAmount = (amount: number, decimals: number): number => {
  return amount / Math.pow(10, decimals);
};

export const formatNumberToString = (value: number): string => {
  return value.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
