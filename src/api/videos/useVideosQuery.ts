import { useQuery } from '@tanstack/react-query';
import { getSearch } from './videos';
import { VideoSearchResponseModel } from 'models/videos/VideoModel';
import { AxiosResponse } from 'axios';

const VIDEOS_QUERY_KEY = 'VIDEOS_QUERY_KEY';

const useVideosQuery = (queryString: string) => {
  const queryResult = useQuery<AxiosResponse<VideoSearchResponseModel>>([VIDEOS_QUERY_KEY, queryString], async () =>
    getSearch(queryString),
  );
  return { ...queryResult, data: queryResult.data?.data };
};

export { useVideosQuery };
