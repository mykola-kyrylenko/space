import {React} from 'react';
import SwiperInfiniteLoop from '../Swiper/Swiper';
import {Container} from './Dragon.styled';

const Dragon = ({ name, description, wikipedia, height_w_trunk, launch_payload_mass, first_flight, flickr_images}) => {

  return (

        <Container>
            <div>
                {flickr_images && <SwiperInfiniteLoop flickr_images={flickr_images}/>}
            </div>

            <div>
                <h2>{name}</h2>
            </div>
            

            <div>
                <p>{description}</p>
                <hr />
                <a href={wikipedia}>Wikipedia</a>
                <hr/>
            </div>

            <div>
                <h4>Basic characteristics:</h4>
                <ul>
                    <li>Height with trunk: <span>{height_w_trunk} meters</span></li>
                    <li>Launch payload mass: <span>{launch_payload_mass} kg</span></li>
                    <li>First Flight: <span>{first_flight}</span></li>
                </ul>
            </div>
        </Container>

  )
}

export default Dragon;