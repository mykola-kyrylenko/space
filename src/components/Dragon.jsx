import {React, useEffect, useState} from 'react';
import SwiperInfiniteLoop from './Swiper/Swiper';

const Dragon = ({id, name, description, wikipedia, height_w_trunk, launch_payload_mass, first_flight, flickr_images}) => {
    // description={data.description}
    // wikipedia={data.wikipedia}
    // height_w_trunk={data.height_w_trunk.meters}
    // launch_payload_mass={data.launch_payload_mass.kg}
    // first_flight={data.first_flight}
    

  return (
    <>
        <li key={id}>
            <div>
                <h1>{name}</h1>
                <img src={flickr_images[0]} alt="Space Rocket" width={600}/>
            </div>
            

            <div>
                <p>{description}</p>
                <a href={wikipedia}>Wikipedia</a>
            </div>

            <div>
                <h5>Basic characteristics</h5>
                <ul>
                    <li>Height with trunk: <span>{height_w_trunk} meters</span></li>
                    <li>Launch payload mass: <span>{launch_payload_mass} kg</span></li>
                    <li>First Flight: <span>{first_flight}</span></li>
                </ul>
            </div>

            <div>
            {flickr_images && <SwiperInfiniteLoop flickr_images={flickr_images}/>}
            </div>

        </li>
    </>
  )
}

export default Dragon;