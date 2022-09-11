import {React, useEffect, useState} from 'react';
import { lazy, Suspense } from "react";
import fetchSpaceXData from '../../services/spaceX-Api';
import { NavLink, Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

const DragonsListPage = () => {
  const [dragons, setDragons] = useState([]);
  const [isLoading, setIsLoading] = useState(false); 

  useEffect(() => {
    setIsLoading(true);
    fetchSpaceXData()
    .then((response)=>setDragons(response))
    .catch((error)=>{
      setIsLoading(false);
      return console.log(error);
    })
    
    setIsLoading(false);
  }, []);



  return (
    <div>
      <aside>
        <h3>Shuttles</h3>
        {isLoading ? <Loader/> : dragons && (
          <ul>

            {dragons.map((dragon)=>(
              <li key={dragon.id}>
                <NavLink to={`${dragon.id}`}>
                  {dragon.name}
                </NavLink>
              </li>
            ))}

          </ul>
        )}

      </aside>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet/>
        </Suspense>
    </div>

  )
}

export default DragonsListPage;