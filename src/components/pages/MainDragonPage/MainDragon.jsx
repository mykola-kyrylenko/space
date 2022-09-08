import {React, useEffect, useState} from 'react';
import fetchDragonData from '../../services/dragonApi';
import Dragon from 'components/Dragon';

function MainDragon() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    // const [mainImage, setMainImage] = useState('');
    const [description, setDescription] = useState('');
    const [wikipediaLink, setWikipediaLink] = useState('');
    const [heightWithTank, setHeightWithTank] = useState('');
    const [launchPayloadMass, setLaunchPayloadMass] = useState('');
    const [firstFlight, setFirstFlight] = useState('');
    const [images, setImages] = useState([])

    useEffect(() => {
        fetchDragonData()
        .then((response)=>{
          // console.log(response);

          setId(response.id);
          setName(response.name);
          // setMainImage(response.flickr_images[0]);
          setDescription(response.description);
          setWikipediaLink(response.wikipedia);
          setHeightWithTank(response.height_w_trunk.meters);
          setLaunchPayloadMass(response.launch_payload_mass.kg);
          setFirstFlight(response.first_flight);
          setImages(response.flickr_images);
          
        }).catch(error=>console.log(error))
    }, [])
    

  return (
    <ul>
        <Dragon
            id={id}
            name={name}
            image={images[0]}
            description={description}
            wikipedia={wikipediaLink}
            height_w_trunk={heightWithTank}
            launch_payload_mass={launchPayloadMass}
            first_flight={firstFlight}
            flickr_images={images}
        />

    </ul>

  )
}

export default MainDragon;