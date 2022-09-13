import "normalize.css";
// import { createGlobalStyle } from "styled-components";
import {Routes, Route} from 'react-router-dom';
import { lazy } from "react";

const MainDragon = lazy(()=> import('./pages/MainDragonPage/MainDragon'));
const Layout = lazy(()=> import('./Layout/Layout'));
const DragonsListPage = lazy(()=> import('./pages/DragonsListPage/DragonsListPage'));
const DragonPage = lazy(()=> import('./pages/DragonPage/DragonPage'));
const NotFoundPage = lazy(()=> import('./pages/NotFoundPage/NotFoundPage'));

export const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<MainDragon/>}/>

        <Route path="dragons-list" element={<DragonsListPage/>}>
          <Route path=":dragonId" element={<DragonPage/>}/>
        </Route>
        
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
