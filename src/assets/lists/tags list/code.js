const url = 'https://tasty.p.rapidapi.com/tags/list'
const options = {
  method: 'GET',
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': '6fe2cef339msh30d7a18b8ca5bdcp1f6234jsn3a1022079a5c',
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
  }
}

try {
  const response = await fetch(url, options)
  const result = await response.text()
  console.log(result)
} catch (error) {
  console.error(error)
}
