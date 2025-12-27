// src/contexts/store.tsx
import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from './slices/settings/settingsSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Web için localStorage
import authReducer from './slices/auth/authSlice';
import notificationReducer from './slices/notification/notificationSlice';

// Redux Persist configuration
const persistConfig = {
  key: 'root',
  storage: storage, // Web için localStorage kullan
  whitelist: ['settings'], // Sadece settings'i persist et
};
const persistedReducer = persistReducer(persistConfig, settingsReducer);

export const store = configureStore({
  reducer: {
    settings: persistedReducer,
    auth: authReducer,
    notification: notificationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

// Global tip tanımlamaları
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
