import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const stocksApi = createApi({
  reducerPath: 'stocksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3100/api/' }),
  endpoints: (builder) => ({
    getAllStocks: builder.query<any, string>({
      query: () => `stocks`
    })
  })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllStocksQuery } = stocksApi;
