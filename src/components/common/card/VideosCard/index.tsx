import React from 'react';
import VideoDescription from 'components/common/VideoDescription';
import { VideoModel } from 'models/videos/VideoModel';
import { useNavigate } from 'react-router-dom';

type Props = {
  item: VideoModel;
};

export default function VideosCard(props: Props) {
  const { channelId, thumbnails, title } = props.item.snippet;
  const videoId = props.item.id.videoId;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/videos/show/${videoId}/${channelId}`, { state: { item: props.item } });
  };

  return (
    <li
      key={`${channelId}${videoId}`}
      onClick={handleClick}
      className='flex flex-col gap-1 w-full xl:w-1/5 md:w-1/3 sm:w-1/2 p-2 mb-7 hover:bg-purple-900 transition duration-500  rounded-xl'>
      <img src={thumbnails.medium.url} alt={title} className='rounded-xl' />
      <VideoDescription item={props.item} />
    </li>
  );
}
