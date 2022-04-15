import react from "react";

export const dateFormat = (string) => {
  let date = new Date(string)
  let month = date.getUTCMonth() + 1; //months from 1-12
  let day = date.getUTCDate();
  let year = date.getUTCFullYear();
  return month + "/" + day + "/" + year
}