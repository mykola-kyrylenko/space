import {Routes, Route} from 'react-router-dom';
import MainDragon from './pages/MainDragonPage/MainDragon';
import Layout from './Layout/Layout';
import DragonsListPage from './pages/DragonsListPage/DragonsListPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

export const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<MainDragon/>}/>
        <Route path="/dragons-list" element={<DragonsListPage/>}/>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
