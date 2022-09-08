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
            wikipedia={item.wikipedia}
            height_w_trunk={item.height_w_trunk.meters}
            launch_payload_mass={item.launch_payload_mass.kg}
            first_flight={item.first_flight}
            flickr_images={item.flickr_images}
          />
        )}

      </ul>
    </div>
  )
}

export default DragonsListPage;