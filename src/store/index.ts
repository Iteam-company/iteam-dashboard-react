import { configureStore } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/query';
import { isProd } from '../constants/env';
import { authReducer } from './slices/auth-slice';
import { baseApiService } from '../api/base-query';

export const store = configureStore({
	reducer: {
		authReducer,
		[baseApiService.reducerPath]: baseApiService.reducer,
		// posts: postsReducer,
		// comments: commentsReducer,
		// users: usersReducer,
	},

	middleware(getDefaultMiddleware) {
		// there we add some apis endpoints
		return getDefaultMiddleware().concat(baseApiService.middleware);
	},
	devTools: !isProd,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
