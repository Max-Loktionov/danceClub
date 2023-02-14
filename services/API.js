import axios from "axios";

const KEY = process.env.KEY;

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
