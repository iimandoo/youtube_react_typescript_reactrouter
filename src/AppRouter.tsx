import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContainerPage from './pages/Container';
import NotFoundsPage from './pages/NotFound';
import ShowPage from './pages/Videos/Show';
import VideosPage from './pages/Videos';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ContainerPage />}>
          <Route index element={<VideosPage />} />
          <Route path='/videos' element={<VideosPage />} />
          <Route path='/videos/:searchWord' element={<VideosPage />} />
          <Route path='/videos/show/:videoId/:channelId' element={<ShowPage />} />
        </Route>
        <Route path='/*' element={<NotFoundsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
