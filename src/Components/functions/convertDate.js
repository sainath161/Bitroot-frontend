export const convertDate = (timestamp) => {
  // Create a new Date object with the timestamp in milliseconds
  const dateObject = new Date(timestamp * 1000);

  // Options for formatting the date
  const options = { month: "short", day: "2-digit", year: "numeric" };

  // Format the date as "Nov 25, 2020"
  const formattedDate = dateObject.toLocaleDateString("en-US", options);

  return formattedDate;
};
