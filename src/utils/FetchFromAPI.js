import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
// const JSJON = JSON.stringify(BASE_URL)
// console.log("API: ",JSJON)

const options = {

  params: {
     maxResult: 30,
  },
  headers: {
    'X-RapidAPI-Key':process.env.REACT_APP_RAPID_API_KEY ,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
   
  return data;
}


  