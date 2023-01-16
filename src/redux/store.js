import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './slices/contactsSlice';
import { filterReducer } from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
});
