import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const authService = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://agro-api-b67m.onrender.com/api/v1/',
  }),
  tagTypes: ['Auth'],
  endpoints: build => ({
    login: build.query({
      query: (token: string) => {
        return {
          url: 'auth/google/token',
          params: {token},
        };
      },
    }),
  }),
});

export const {useLoginMutation} = authService;
