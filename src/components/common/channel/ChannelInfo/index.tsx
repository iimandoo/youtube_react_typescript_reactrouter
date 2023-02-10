import React, { useState } from 'react';
import { useChannelThumbnailQuery } from 'api/channel/useChannelThumbnailQuery';
import { ChannelModel } from 'models/channels/ChannelModel';
import { ChannelThumbnailByTitle } from 'components/common/channel/ChannelThumbnailByTitle';

type Props = {
  channelId: string;
  channelTitle: string;
};

const ChannelInfo = (props: Props) => {
  const { channelId, channelTitle } = props;
  const [thumbnailUrl, setThumbnailUrl] = useState<string>();

  useChannelThumbnailQuery(channelId, {
    onSuccess: (res) => {
      const thumbnailUrl: string =
        res.data?.items.find((item: ChannelModel) => item?.id === channelId)?.snippet.thumbnails.default.url ?? '';
      setThumbnailUrl(thumbnailUrl);
      return res;
    },
    onError: (err: any) => console.log(`err: ${err}`),
  });

  return (
    <div className='flex flex-row gap-1 items-center'>
      {thumbnailUrl ? (
        <img src={thumbnailUrl} alt={channelTitle} className='channel-thumbnail-md rounded-full' />
      ) : (
        <ChannelThumbnailByTitle channelTitle={channelTitle} />
      )}
      <span>{channelTitle}</span>
    </div>
  );
};

export default ChannelInfo;
