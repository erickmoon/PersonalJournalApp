// src/store/store.ts

import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice'; // Importing the auth slice reducer
import journalReducer from '../slices/journalSlice'; // Importing the journal slice reducer

// Configure the Redux store with combineReducers from Redux Toolkit
export const store = configureStore({
  reducer: {
    auth: authReducer, // Registering authReducer under 'auth' key in the store
    journal: journalReducer, // Registering journalReducer under 'journal' key in the store
  },
});

// Define the RootState type by inferring the state type from the Redux store
export type RootState = ReturnType<typeof store.getState>;

// Define the AppDispatch type to access the dispatch function with correct types
export type AppDispatch = typeof store.dispatch;
