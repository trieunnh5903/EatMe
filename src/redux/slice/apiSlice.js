import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'api/v1/',
  }),
  endpoints: buider => ({
    getAllFoods: buider.query({
      query: page => '/foods/' + page,
      // thời gian dữ liệu lưu trong cache nếu không có subciptions nào, đơn vị là miliseconds default 60s
      keepUnusedDataFor: 60 * 1000,
    }),
  }),
});

export const {useGetAllFoodsQuery} = apiSlice;
