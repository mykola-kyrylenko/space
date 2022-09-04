import MainDragon from './MainDragon';

export const App = () => {
  // 

  // const BASE_URL = 'https://api.spacexdata.com/v4/dragons/5e9d058759b1ff74a7ad5f8f';

  // fetch(BASE_URL)
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //     console.log(data.flickr_images);
  //     console.log(data.id)
  //     console.log(data.name)
  //     console.log(data.description);
  //     console.log(data.wikipedia);
  //     console.log(data.height_w_trunk.meters);
  //     console.log(data.launch_payload_mass.kg);
  //     console.log(data.first_flight);
  //   });

    // Доп параметры (высота, масса, год)

  // export const getDragon = async ()=>{
  //     const response = await axios.get('')
  // }




  return (
    <div>
      <MainDragon/>
      
    </div>
  );
};
