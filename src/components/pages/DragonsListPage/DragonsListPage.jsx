import {React, useEffect, useState} from 'react';
import { lazy, Suspense } from "react";
import fetchSpaceXData from '../../services/spaceX-Api';
import {Outlet } from 'react-router-dom';
import { List, NavL} from './DragonListPage.styled';

const Loader = lazy(()=> import('../../Loader/Loader'));


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

          <div>
            {isLoading ? <Loader/> : dragons && (
              <List>

                {dragons.map((dragon)=>(
                  <li key={dragon.id}>
                    <NavL to={`${dragon.id}`}>
                      {dragon.name}
                    </NavL>
                  </li>
                ))}

              </List>
            )}

          </div>
        
        <div>
          <Suspense fallback={<div>Loading page...</div>}>
            <Outlet/>
          </Suspense>
        </div>


    </div>

  )
}

export default DragonsListPage;