export const getAge = (birthYear, currentYear) => currentYear - birthYear;

export const getAgeGroup = (age) => {
  if (age < 4) {
    return "toddler";
  }

  return "kid";
};
