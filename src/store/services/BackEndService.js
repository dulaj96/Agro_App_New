import {createApi} from '@reduxjs/toolkit/dist/query/react';
import {fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';

const backEndService = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://agro-api-b67m.onrender.com/api/v1/',
    headers: 'bearer adsdasdasdsadasdasdasdsadsadsaddasdasdas', //token received after login
  }),
  tagTypes: ['Categories', 'Crops'],
  endpoints: build => ({
    getCategories: build.query({
      query: () => {
        return {
          url: '/categories',
        };
      },
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
  }),
});

export const {useGetCategoriesQuery, useGetCropsQuery, useGetCrop} =
  backEndService;
