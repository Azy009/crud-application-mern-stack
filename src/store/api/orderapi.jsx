import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/" }),
  endpoints: (builder) => ({
    getAllOrder: builder.query({
      query: () => ({
        url:'order',
        method:'GET'
      })
    }),
    getSingleOrder: builder.query({
        query: (id) => ({
          url: `order/${id}`,
          method:'GET'
        })
      }),
    postCategory: builder.mutation({
        query: (data) => ({
          url: `category`,
          method:'POST',
          body:data
        })
      }),
    postOrderStatus: builder.mutation({
        query: ({data,id}) => ({
          url: `order/changestatus/${id}`,
          method:'POST',
          body:data
        })
      }),
    deleteUser: builder.mutation({
        query: (id) => ({
          url: `user/${id}`,
          method:'DELETE'
        })
      }),
  }),
})

export const { useGetAllOrderQuery,useGetSingleOrderQuery,usePostCategoryMutation,usePostOrderStatusMutation,useDeleteUserMutation } = orderApi