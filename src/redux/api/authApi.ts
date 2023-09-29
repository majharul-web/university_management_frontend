import { baseApi } from "./baseApi";
const AUTH_URL = "/auth";
export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        method: "POST",
        url: `${AUTH_URL}/login`,
        data: loginData,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useUserLoginMutation } = authApi;
