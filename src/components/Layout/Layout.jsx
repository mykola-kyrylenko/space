import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';
import Logo from 'components/Logo/Logo';

const Layout = () => {
  return (
    <div>
      <div>
        <div>
              <Logo/>
          </div>

          <div>
              <AppBar/>
          </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet/>
      </Suspense>
    </div>
  )
}

export default Layout;