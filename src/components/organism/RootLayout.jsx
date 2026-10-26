// Organismo: estructura común a todas las páginas
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Decorations from './Decorations';

function RootLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Decorations />
      <Outlet />
    </>
  );
}

export default RootLayout;
