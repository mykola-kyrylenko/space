import {React, useEffect, useState} from 'react';
import { useParams} from "react-router-dom";
import Dragon from '../../Dragon/Dragon';
import fetchSpaceXData from '../../services/spaceX-Api';
import Loader from 'components/Loader/Loader';
// import {Container} from './DragonPage.styled';

function DragonPage() {
  const [isLoading, setIsLoading] = useState(false);

  const {dragonId} = useParams();
  const [dragon, setDragon] = useState([]);

  // const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [wikipedia, setWikipediaLink] = useState('');
  const [height_w_trunk, setHeightWithTank] = useState('');
  const [launch_payload_mass, setLaunchPayloadMass] = useState('');
  const [first_flight, setFirstFlight] = useState('');
  const [flickr_images, setImages] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetchSpaceXData()
    .then((response)=>{
      const result = response.find((item)=>item.id === dragonId);
      return result;
    })
    .then((result)=>{
      setDragon(result);

      // setId(result.id);
      setName(result.name);
      setDescription(result.description);
      setWikipediaLink(result.wikipedia);
      setHeightWithTank(result.height_w_trunk.meters);
      setLaunchPayloadMass(result.launch_payload_mass.kg);
      setFirstFlight(result.first_flight);
      setImages(result.flickr_images);

      setIsLoading(false);
      
    }).catch((error)=>{
      setIsLoading(false);
      return console.log(error);
    })

  }, [dragonId]);


  return (
    <div>
        {isLoading ? <Loader/> : dragonId 
        &&         
        <Dragon
              name={name}
              description={description}
              wikipedia={wikipedia}
              height_w_trunk={height_w_trunk}
              launch_payload_mass={launch_payload_mass}
              first_flight={first_flight}
              flickr_images={flickr_images}
        />}
    </div>
  )
}

export default DragonPage;
