import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';

const Layout = () => {
  return (
    <div>
      <div>
        <AppBar/>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet/>
      </Suspense>
    </div>
  )
}

export default Layout;