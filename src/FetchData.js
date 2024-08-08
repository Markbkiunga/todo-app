export const baseURL = "http://localhost:3000/todos";

export function fetchData(url = baseURL, method = "GET", data = null) {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: data ? JSON.stringify(data) : null,
  };
  return fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Fetch error: ", error);
    });
}
