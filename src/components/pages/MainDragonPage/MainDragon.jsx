import {React, useEffect, useState} from 'react';
import fetchDragonData from '../../services/dragonApi';
import SwiperInfiniteLoop from '../../Swiper/Swiper';

function MainDragon() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [mainImage, setMainImage] = useState('');
    const [description, setDescription] = useState('');
    const [wikipediaLink, setWikipediaLink] = useState('');
    const [heightWithTank, setHeightWithTank] = useState('');
    const [launchPayloadMass, setLaunchPayloadMass] = useState('');
    const [firstFlight, setFirstFlight] = useState('');


    useEffect(() => {
        fetchDragonData()
        .then((response)=>{
                console.log(response);

            setId(response.id);
            setName(response.name);
            setMainImage(response.flickr_images[0]);
            setDescription(response.description);
            setWikipediaLink(response.wikipedia);
            setHeightWithTank(response.height_w_trunk.meters);
            setLaunchPayloadMass(response.launch_payload_mass.kg);
            setFirstFlight(response.first_flight);
            // setImages(response.flickr_images);

            // const ImagesObj = response.flickr_images.map((item)=>{
            //     return {
            //         original: item,
            //         thumbnail: item
            //     }
            //     // console.log(item)
            // });

            // setImages(ImagesObj);
        })

    }, [])
    




  return (
    <div key={id}>
        <div>
            <h1>{name}</h1>
            <img src={mainImage} alt="Space Rocket" width={600}/>
        </div>
        

        <div>
            <p>{description}</p>
            <a href={wikipediaLink}>Wikipedia</a>
        </div>

        <div>
            <h5>Basic characteristics</h5>
            <ul>
                <li>Height with trunk: <span>{heightWithTank} meters</span></li>
                <li>Launch payload mass: <span>{launchPayloadMass} kg</span></li>
                <li>First Flight: <span>{firstFlight}</span></li>
            </ul>
        </div>

        <div>
            <SwiperInfiniteLoop/>
        </div>

    </div>
  )
}

export default MainDragon;


  //     console.log(data);
  //     console.log(data.flickr_images);
  //     console.log(data.id)
  //     console.log(data.name)
  //     console.log(data.description);
  //     console.log(data.wikipedia);
  //     console.log(data.height_w_trunk.meters);
  //     console.log(data.launch_payload_mass.kg);
  //     console.log(data.first_flight);