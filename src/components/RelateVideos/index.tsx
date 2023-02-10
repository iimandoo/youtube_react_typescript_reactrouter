import React from 'react';
import { useRelateVideosQuery } from 'api/videos/useRelateVideosQuery';
import RelateVideoCard from 'components/common/card/RelateVideoCard';
import Loading from 'components/common/Loading';
import Error from 'components/common/Error';

type Props = {
  channelId?: string;
};

const RelateVideos = (props: Props) => {
  const { isLoading, isError, data } = useRelateVideosQuery(props.channelId ?? '');

  return (
    <section className='w-full lg:w-2/6'>
      <ul>
        {data?.items?.map((item) => {
          return <RelateVideoCard key={item.id.videoId} item={item} />;
        })}
      </ul>
      {isLoading && <Loading />}
      {isError && <Error />}
    </section>
  );
};

export default RelateVideos;
