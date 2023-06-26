import {createApi} from '@reduxjs/toolkit/query/react';export const userSettingsService = createApi({  reducerPath: 'userSettingsApi',  baseQuery: () => {    return {      data: {        firstName: 'Jan',        lastName: 'Kowalski',        email: 'jan@kowalski.pl',        country: 'Poland',        defaultDocumentType: 'ID',        idNumber: 'CBC897123'      }    };  },  endpoints: builder => ({    getUserSettings: builder.query({      query: () => () => {},    }),    updateUserSettings: builder.mutation({      query: updatedSettings => ({        url: 'user/settings',        method: 'PUT',        body: updatedSettings,      }),    }),  })});export const { useGetUserSettingsQuery, useUpdateUserSettingsMutation } = userSettingsService;