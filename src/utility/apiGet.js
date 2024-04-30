const gateway = "https://api.nasa.gov/planetary/apod";
const api_key = "bc3hXLcNwyq7lhxTYHMSY3itEr7azIjHpUNtYn0v";

export default apiGet = async (parametros) => {
  try {
    const response = await fetch(
      `${gateway}?api_key=${api_key}${parametros.length > 0 ? parametros : ""}`
    );
    const Data = await response.json();
    return Data;
  } catch (error) {
    console.error(error);
    console.log(Data);
  } finally {
    //fin
  }
};