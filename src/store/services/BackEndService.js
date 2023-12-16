import {createApi} from '@reduxjs/toolkit/dist/query/react';
import {fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {BASE_URL} from '@env';

console.log('BASE_URL', BASE_URL);

export const backEndService = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://agro-api-b67m.onrender.com/api/v1/',
    prepareHeaders: (headers, {getState}) => {
      const token = getState().auth.auth.token;

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Categories'],
  reducerPath: 'backend-api',
  endpoints: build => ({
    getCategories: build.query({
      query: () => {
        return {
          url: '/categories',
        };
      },
      // providesTags: result =>
      //   result
      //     ? [
      //         ...result.data.docs.map(id => ({type: 'Categories', id})),
      //         {type: 'Categories', id: 'PARTIAL-LIST'},
      //       ]
      //     : [{type: 'Comments', id: 'PARTIAL-LIST'}],
    }),
    getCrops: build.query({
      query: categoryId => {
        return {
          url: '/crops',
          params: {categoryId},
        };
      },
    }),
    getCrop: build.query({
      query: cropId => {
        return {
          url: `/crops/${cropId}`,
        };
      },
    }),
    getSelections: build.query({
      query: selection => {
        return {
          url: '/select',
          method: 'GET',
          params: {selection: JSON.stringify(selection)},
        };
      },
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useLazyGetCropsQuery,
  useGetCropQuery,
  useGetSelectionsQuery,
} = backEndService;
