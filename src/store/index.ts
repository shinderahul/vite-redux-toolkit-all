import { configureStore } from "@reduxjs/toolkit";
import optionsReducer from "./slices/optionsSlice";

export const store = configureStore({
  reducer: {
    options: optionsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
