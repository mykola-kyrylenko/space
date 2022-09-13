import { TailSpin } from  'react-loader-spinner'
import React from 'react'

function Loader() {
  return (
    <div>
        <TailSpin
            color="#0260da" 
            height={80} 
            width={80}
        />
    </div>

  )
}

export default Loader;