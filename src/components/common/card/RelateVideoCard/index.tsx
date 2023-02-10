import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import VideoDescription from '../../VideoDescription';
import { VideoModel } from 'models/videos/VideoModel';

type Props = {
  item: VideoModel;
};

const RelateVideoCard = (props: Props) => {
  const { channelId, title, thumbnails } = props.item.snippet;
  const videoId = props.item.id.videoId;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/videos/show/${videoId}/${channelId}`, { state: { item: props.item } });
  };

  return (
    <li
      key={`${channelId}${videoId}`}
      onClick={handleClick}
      className='w-full p-2 hover:bg-purple-900 transition duration-5s00  rounded-xl'>
      <Link to={`/videos/show/${videoId}/${channelId}`} className='flex flex-row gap-3'>
        <img src={thumbnails.default.url} alt={title} className='rounded-xl' />
        <VideoDescription item={props.item} />
      </Link>
    </li>
  );
};

export default RelateVideoCard;
