export const plural = (num: number, titles: string[]): string => {
  let indexArr = 2;
  if (num % 10 === 1 && num % 100 !== 11) {
    indexArr = 0;
  } else if (
    num % 10 >= 2 &&
    num % 10 <= 4 &&
    (num % 100 < 10 || num % 100 >= 20)
  ) {
    indexArr = 1;
  }
  return titles[indexArr];
};
