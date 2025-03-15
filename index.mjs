export const getAge = (birthYear, currentYear) => currentYear - birthYear;

export const getAgeGroup = (age) => {
  if (age < 0) return "Age can't be under zero!";
  if (age < 4) return "toddler";
  if (age < 13) return "kid";
  if (age < 20) return "teenager";
  if (age < 39) return "adult";
  if (age === 50) return "prime";
  return "old";
};
