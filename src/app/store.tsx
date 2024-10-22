// How would you create an API slice using createApi to fetch a list of users from an endpoint /users? What would the endpoint and query definition look like?


import { configureStore } from '@reduxjs/toolkit';
import { usersApi } from '../features/users/apiSlice';


export const store = configureStore({


    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware),

});
