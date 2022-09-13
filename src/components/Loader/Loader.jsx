import { TailSpin } from  'react-loader-spinner'
import React from 'react';
import {Container} from './Loader.styled';

function Loader() {
  return (
    <Container>
        <TailSpin
            color="#0260da" 
            height={80} 
            width={80}
        />
    </Container>

  )
}

export default Loader;