import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const loginRTK = createApi({
    reducerPath: 'login',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_API_URL}`,
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (payload) => ({
                url:'/users/login',
                method: 'POST',
                body:payload
            })
        })
    })
});

export const { useLoginMutation } = loginRTK;