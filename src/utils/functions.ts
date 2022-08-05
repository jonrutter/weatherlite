export const capitalize = (str: string): string => {
  if (typeof str !== 'string') {
    console.warn('Bad input passed to capitalize()');
    return '';
  } else if (str.length < 2) return str.toUpperCase();
  else {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  }
};

export const toFixedZero = (num: number): number => {
  if (typeof num !== 'number') {
    console.warn('Bad input passed to toFixedZero()');
    return 0;
  } else {
    return Number(num.toFixed(0));
  }
};
