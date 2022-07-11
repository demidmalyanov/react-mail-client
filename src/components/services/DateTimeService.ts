// Date time service gives methods for labeling, format dates for jobs cards

const months = [
  "янв",
  "фев",
  "марта",
  "апр",
  "мая",
  "июня",
  "июля",
  "авг",
  "сен",
  "окт",
  "ноя",
  "дек",
];

// Month mapping and formatting
export const formatUnixToString = (timestamp: number): string => {
  const date = new Date(timestamp);

  return date.getDate() + " " + months[date.getMonth()];
};

export default {
  formatUnixToString,
};
