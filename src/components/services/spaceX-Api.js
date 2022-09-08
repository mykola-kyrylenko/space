import axios from "axios";

const BASE_URL = 'https://api.spacexdata.com/v4/dragons';

export default async function fetchSpaceXData(){
  try{
    const response = await axios.get(BASE_URL);
    // console.log(response)
    return response.data;


  } catch(error){
    console.log(error)
  }
}