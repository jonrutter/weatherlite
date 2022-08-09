export const toFixedZero = (num: number): number => {
  if (typeof num !== 'number') {
    console.warn('Bad input passed to toFixedZero()');
    return 0;
  } else {
    return Number(num.toFixed(0));
  }
};
