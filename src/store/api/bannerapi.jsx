import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const bannerApi = createApi({
  reducerPath: 'bannerApi',
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/" }),
  endpoints: (builder) => ({
    getAllBanner: builder.query({
      query: () => ({
        url:'banner',
        method:'GET'
      })
    }),
    getSingleBanner: builder.query({
        query: (id) => ({
          url: `banner/${id}`,
          method:'GET'
        })
      }),
    postBanner: builder.mutation({
        query: (data) => ({
          url: `banner`,
          method:'POST',
          body:data
        })
      }),
    patchBanner: builder.mutation({
        query: ({data,id}) => ({
          url: `banner/${id}`,
          method:'PATCH',
          body:data
        })
      }),
    deleteBanner: builder.mutation({
        query: (id) => ({
          url: `banner/${id}`,
          method:'DELETE'
        })
      }),
  }),
})

export const { useGetAllBannerQuery,useGetSingleBannerQuery,usePostBannerMutation,usePatchBannerMutation,useDeleteBannerMutation } = bannerApi