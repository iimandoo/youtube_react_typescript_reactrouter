export type ChannelModel = {
  id: string;
  snippet: {
    title: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
};

export type ChannelsResponseModel = {
  items: [ChannelModel];
};
