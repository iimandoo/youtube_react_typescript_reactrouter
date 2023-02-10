import React from 'react';
import TimeAgo from 'react-timeago';
import { VideoModel } from 'models/videos/VideoModel';

type Props = {
  item: VideoModel;
};
export default function VideoDescription(props: Props) {
  const { title, channelTitle, publishedAt } = props.item.snippet;

  return (
    <>
      <div className='flex flex-col hover:text-purple-100'>
        <span className='font-bold line-clamp-2'>{title}</span>
        <span>{channelTitle}</span>
        <span>
          <TimeAgo date={publishedAt} />
        </span>
      </div>
    </>
  );
}
