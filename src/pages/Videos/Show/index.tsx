import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Video from 'components/Video';
import RelateVideos from 'components/RelateVideos';
import { VideosShowPageParams } from 'models/videos/ShowModel';

const ShowPage = () => {
  const { channelId } = useParams<VideosShowPageParams>();
  const {
    state: { item },
  } = useLocation();

  return (
    <div className='flex flex-col lg:flex-row gap-2'>
      <Video item={item} />
      <RelateVideos channelId={channelId}></RelateVideos>
    </div>
  );
};

export default ShowPage;
