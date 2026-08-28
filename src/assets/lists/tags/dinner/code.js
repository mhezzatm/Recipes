const url = "https://tasty.p.rapidapi.com/recipes/list?from=0&size=500&tags=dinner";
const options = {
  method: "GET",
  headers: {
    "content-type": "application/octet-stream",
    "X-RapidAPI-Key": "6fe2cef339msh30d7a18b8ca5bdcp1f6234jsn3a1022079a5c",
    "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
