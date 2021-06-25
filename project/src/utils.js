export const getOffersList = (offers, city) => offers.filter((offer) => offer.city.name === city);

export const isPlural = (amount, word, suffix = 's') => {
  if (amount !== 1) {
    return `${word}${suffix}`;
  } else {
    return word;
  }
};
