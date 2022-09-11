import {React, useEffect, useState} from 'react';
import fetchDragonData from '../../services/dragonApi';
import Dragon from '../../Dragon/Dragon';
import Loader from 'components/Loader/Loader';

function MainDragon() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [wikipediaLink, setWikipediaLink] = useState('');
    const [heightWithTank, setHeightWithTank] = useState('');
    const [launchPayloadMass, setLaunchPayloadMass] = useState('');
    const [firstFlight, setFirstFlight] = useState('');
    const [images, setImages] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        
        fetchDragonData()
        .then((response)=>{
          setId(response.id);
          setName(response.name);
          setDescription(response.description);
          setWikipediaLink(response.wikipedia);
          setHeightWithTank(response.height_w_trunk.meters);
          setLaunchPayloadMass(response.launch_payload_mass.kg);
          setFirstFlight(response.first_flight);
          setImages(response.flickr_images);

          setIsLoading(false);
          
        }).catch((error)=>{
          setIsLoading(false);
          return console.log(error);
        })

    }, [])
    


  return (
    <div>
        {isLoading ? <Loader/> : <Dragon
              key={id}
              name={name}
              description={description}
              wikipedia={wikipediaLink}
              height_w_trunk={heightWithTank}
              launch_payload_mass={launchPayloadMass}
              first_flight={firstFlight}
              flickr_images={images}
          />}

    </div>

  )
}

export default MainDragon;