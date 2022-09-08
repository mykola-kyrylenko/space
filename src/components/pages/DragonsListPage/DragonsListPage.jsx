import {React, useEffect, useState} from 'react';
import fetchSpaceXData from '../../services/spaceX-Api';

const DragonsListPage = () => {
  const [dragons, setDragons] = useState([]);

  useEffect(() => {
    fetchSpaceXData()
    .then((response)=>setDragons(response))

  }, []);

  // console.log(dragons);



  return (
    <div>
      <ul>
        {dragons.map((item)=>{
          return <li key={item.id}><a href="">{item.name}</a></li>
        })}
      </ul>
    </div>
  )
}

export default DragonsListPage;