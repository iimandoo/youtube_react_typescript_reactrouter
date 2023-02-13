import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from 'components/Navbar';

const ContainerPage = () => {
  return (
    <div className='flex flex-col lg:w-5/6 md:w-full pl-2 pr-2'>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default ContainerPage;
