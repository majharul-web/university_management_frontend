import { authApi } from "./api/authApi";

export const reducer = {
  [authApi.reducerPath]: authApi.reducer,
};
