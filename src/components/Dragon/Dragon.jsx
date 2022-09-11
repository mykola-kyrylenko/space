import {React} from 'react';
import SwiperInfiniteLoop from '../Swiper/Swiper';

const Dragon = ({ name, description, wikipedia, height_w_trunk, launch_payload_mass, first_flight, flickr_images}) => {

  return (

        <div>
            <div>
                {flickr_images && <SwiperInfiniteLoop flickr_images={flickr_images}/>}
            </div>

            <div>
                <h2>{name}</h2>
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
        </div>

  )
}

export default Dragon;