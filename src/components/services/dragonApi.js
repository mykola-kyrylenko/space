import axios from "axios";

const BASE_URL = 'https://api.spacexdata.com/v4/dragons/5e9d058759b1ff74a7ad5f8f';

export default async function fetchDragonData(){
    try{
      const response = await axios.get(BASE_URL);
      return response.data;

    } catch(error){
      console.log(error)
    }
}




