import { VideoSearchResponseModel } from 'models/videos/VideoModel';
import axios from 'axios';

export const getSearch = async (data: string) => {
  return await axios.get<VideoSearchResponseModel>(`/data/${data ? 'search' : 'default'}videos.json`);
};
