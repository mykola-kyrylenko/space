import {React, useEffect, useState} from 'react';
import fetchSpaceXData from '../../services/spaceX-Api';
import Dragon from '../../Dragon';

const DragonsListPage = () => {
  const [dragons, setDragons] = useState([]);

  useEffect(() => {
    fetchSpaceXData()
    .then((response)=>setDragons(response))

  }, []);

  console.log(dragons);



  return (
    <div>
      <ul>
        {/* {dragons.map((item)=>{
          return <li key={item.id}><a href="">{item.name}</a></li>
        })} */}

        {dragons.map((item)=><Dragon
            key={item.id}
            name={item.name}
            image={item.mainImage}
            description={item.description}
            wikipedia={item.wikipediaLink}
            height_w_trunk={item.heightWithTank}
            launch_payload_mass={item.launchPayloadMass}
            first_flight={item.firstFlight}
            flickr_images={item.images}
          />
        )}

      </ul>
    </div>
  )
}

export default DragonsListPage;