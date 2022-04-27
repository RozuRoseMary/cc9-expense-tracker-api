export const formatShortMonthShortYear = (date) =>
  new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "2-digit",
  }).format(date);
