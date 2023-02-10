import ChannelInfo from 'components/common/channel/ChannelInfo';
import { VideoModel } from 'models/videos/VideoModel';
import React from 'react';

type Props = {
  item: VideoModel;
};

const Video = (props: Props) => {
  const {
    id: { videoId },
    snippet: { title, description, channelId, channelTitle },
  } = props.item;

  return (
    <section className='w-full lg:w-4/6'>
      <article className='flex flex-col gap-2'>
        <div className='relative' style={{ paddingBottom: '56%' }}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title='YouTube video player'
            className='absolute inset-0 w-full aspect-video border-none'></iframe>
        </div>
        <h1 className='text-2xl'>{title}</h1>
        <ChannelInfo channelId={channelId} channelTitle={channelTitle}></ChannelInfo>
        <pre>{description}</pre>
      </article>
    </section>
  );
};

export default Video;
