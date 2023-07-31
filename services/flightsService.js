import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';const baseURL = 'http://192.168.33.8:3000';const endpoint = '/flights';export const flightsService = createApi({  reducerPath: 'flightsServiceApi',  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),  endpoints: builder => ({    getAllFlights: builder.query({      query: () => `${endpoint}/all`    }),    getTopFlights: builder.query({      query: limit => `${endpoint}/all?limit=${limit}`    }),    getFlightById: builder.query({      query: id => `${endpoint}/${id}`    })  })});export const { useGetAllFlightsQuery, useGetTopFlightsQuery, useGetFlightByIdQuery } = flightsService;