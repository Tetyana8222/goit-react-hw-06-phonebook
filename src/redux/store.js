import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import logger from 'redux-logger';
import { contactsSlice } from './contactsSlice';
import { filterSlice } from './filterSlice';

const persistConfig = {
  key: 'contacts',
  storage,
};

const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],
});

export const persistor = persistStore(store);
