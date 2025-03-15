export const getAge = (birthYear, currentYear) => currentYear - birthYear;

export const getAgeGroup = (age) => {
  if (age < 4) return "toddler";
  if (age < 13) return "kid";
  return "teenager";
};
