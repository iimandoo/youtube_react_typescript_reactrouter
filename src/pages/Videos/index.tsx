import React from 'react';
import { useParams } from 'react-router-dom';
import { useVideosQuery } from 'api/videos/useVideosQuery';
import { VideosSearchParams, VideoModel } from 'models/videos/VideoModel';
import Loading from 'components/common/Loading';
import Error from 'components/common/Error';
import VideosCard from 'components/common/card/VideosCard';

const VideosPage: React.FC = () => {
  const { searchWord } = useParams<VideosSearchParams>();
  const { isLoading, isError, data } = useVideosQuery(searchWord ?? '');

  return (
    <section>
      <ul className='flex flex-row flex-wrap justify-start'>
        {data?.items.map((video: VideoModel) => {
          return <VideosCard key={video.id.videoId} item={video} />;
        })}
      </ul>
      {isLoading && <Loading />}
      {isError && <Error />}
    </section>
  );
};
export default VideosPage;
