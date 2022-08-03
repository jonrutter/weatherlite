export const capitalize = (str: string): string => {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
};

export const toFixedZero = (num: number): number => {
  return Number(num.toFixed(0));
};
