import axios from "axios";
//https://pixabay.com/api/?key=27626475-8422ee6256ea07f97d3a4bc44&image_type=photo&orientation=horizontal&q=dancers&page=1&per_page=16
const KEY = "27626475-8422ee6256ea07f97d3a4bc44";
async function getGallery() {
  const newQuery = "dancers";
  const newPage = 1;
  const response = await axios.get(
    `https://pixabay.com/api/?key=${KEY}&image_type=photo&orientation=horizontal&q=${newQuery}&page=${newPage}&per_page=16`
  );

  return response.data;
}

const API = { getGallery };
export default API;
