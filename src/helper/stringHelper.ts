export const toTitleCase = (str: string): string => {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const extractYearlyPercentage = (input: string): string => {
  const match = input.match(/(\d+)%/);

  if (match && match[1]) {
    return `${match[1]}% Yearly`;
  }
};
