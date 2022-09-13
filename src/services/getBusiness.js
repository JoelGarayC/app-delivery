import { config } from "../config";

export async function getBusiness() {
  const res = await fetch(`${config.apiURL}/empresa`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}
