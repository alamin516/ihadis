import BN from 'bn.js';

export const bengaliNumeral = (number) => {
  const bengaliNumerals = [
    '০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'
  ];

  const numberString = number.toString();
  let bengaliString = '';

  for (let i = 0; i < numberString.length; i++) {
    const digit = parseInt(numberString.charAt(i));
    bengaliString += bengaliNumerals[digit];
  }

  return bengaliString;
};
