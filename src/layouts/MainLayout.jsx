import React from 'react';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <div>
      <p className='text-5xl font-bold text-center mt-3'>WebLnw</p>
      <Outlet />
    </div>
  );
}

export default MainLayout;