import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/" }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url:'user',
        method:'GET'
      })
    }),
    getSingleUser: builder.query({
        query: (id) => ({
          url: `user/${id}`,
          method:'GET'
        })
      }),
    postUser: builder.mutation({
        query: (data) => ({
          url: `user/user_creation`,
          method:'POST',
          body:data
        })
      }),
    patchUser: builder.mutation({
        query: ({data,id}) => ({
          url: `user/${id}`,
          method:'PATCH',
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

export const { useGetAllUsersQuery, useGetSingleUserQuery,usePostCategoryMutation,usePatchUserMutation,useDeleteUserMutation,usePostUserMutation } = userApi