import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const attributeApi = createApi({
  reducerPath: 'attributeApi',
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/" }),
  endpoints: (builder) => ({
    getAllAttribute: builder.query({
      query: () => ({
        url:'attribute',
        method:'GET'
      })
    }),
    getSingleAttribute: builder.query({
        query: (id) => ({
          url: `attribute/${id}`,
          method:'GET'
        })
      }),
    getAttributeByCategoryId: builder.query({
        query: (id) => ({
          url: `attribute/listbycategoryid/${id}`,
          method:'GET'
        })
      }),
    postAttribute: builder.mutation({
        query: (data) => ({
          url: `attribute`,
          method:'POST',
          body:data
        })
      }),
    patchAttribute: builder.mutation({
        query: ({data,id}) => ({
          url: `attribute/${id}`,
          method:'PATCH',
          body:data
        })
      }),
    deleteAttribute: builder.mutation({
        query: (id) => ({
          url: `attribute/${id}`,
          method:'DELETE'
        })
      }),
  }),
})

export const { useGetAllAttributeQuery,useGetAttributeByCategoryIdQuery,useGetSingleAttributeQuery,usePatchAttributeMutation,useDeleteAttributeMutation, usePostAttributeMutation } = attributeApi