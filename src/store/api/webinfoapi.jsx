import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const webinfoApi = createApi({
  reducerPath: 'webinfoApi',
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/" }),
  endpoints: (builder) => ({
    getWebinfo: builder.query({
      query: () => ({
        url:'websiteinfo',
        method:'GET'
      })
    }),
    patchWebinfo: builder.mutation({
      query: ({data}) => ({
        url: `websiteinfo`,
        method:'PATCH',
        body:data
      })
    }),
  }),
})

export const { useGetWebinfoQuery,usePatchWebinfoMutation } = webinfoApi