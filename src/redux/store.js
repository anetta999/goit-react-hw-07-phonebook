// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { combineReducers, createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistedReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// const enhancer = devToolsEnhancer();

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
