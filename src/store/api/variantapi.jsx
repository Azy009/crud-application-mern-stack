import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const variantApi = createApi({
  reducerPath: 'variantApi',
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/" }),
  endpoints: (builder) => ({
    getAllVariant: builder.query({
      query: (id) => ({
        url:`variant/id/${id}`,
        method:'GET'
      })
    }),
    getSingleVariant: builder.query({
        query: (id) => ({
          url: `variant/${id}`,
          method:'GET'
        })
      }),
    postVariant: builder.mutation({
        query: (data) => ({
          url: `variant`,
          method:'POST',
          body:data
        })
      }),
    patchVariant: builder.mutation({
        query: ({data,id}) => ({
          url: `variant/${id}`,
          method:'PATCH',
          body:data
        })
      }),
    deleteProduct: builder.mutation({
        query: (id) => ({
          url: `product/${id}`,
          method:'DELETE'
        })
      }),
  }),
})

export const { useGetAllVariantQuery,useGetSingleVariantQuery,usePostVariantMutation,usePatchVariantMutation,useDeleteProductMutation } = variantApi