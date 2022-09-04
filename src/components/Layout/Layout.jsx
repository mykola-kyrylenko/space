// import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';
import Logo from 'components/Logo/Logo';

const Layout = () => {
  return (
    <div>
        <div>
            <Logo/>
        </div>

        <div>
            <AppBar/>
        </div>
        <Outlet/>

    </div>
  )
}

export default Layout;