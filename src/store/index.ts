import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/query';
import { isProd } from '../constants/env';
import { authReducer } from './slices/auth-slice';
import { baseApiService } from '../api/base-query';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
	auth: authReducer,
	[baseApiService.reducerPath]: baseApiService.reducer,
});

const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['api'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware(getDefaultMiddleware) {
		return getDefaultMiddleware({
			serializableCheck: {
				// Ignore these action types
				ignoredActions: ['persist/PERSIST'],
				// Ignore these field paths in all actions
				// ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
				// Ignore these paths in the state
				// ignoredPaths: ['items.dates'],
			},
		})
			.concat(baseApiService.middleware)
			.concat(thunk);
	},
	devTools: !isProd,
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
