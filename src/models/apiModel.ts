export type ApiResponseModel<T = any> = {
  data: T;
  failGoBack: boolean;
  status: number;
  message: string;
  success: boolean;
  timestamp: number;
};
