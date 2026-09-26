import { createSlice } from "@reduxjs/toolkit";

const STATIC_ADMIN_TOKEN = "static-admin-session";

const authSlice = createSlice({
    name: "auth",
    initialState: {
      isAuthenticated: localStorage.getItem("adminToken") === STATIC_ADMIN_TOKEN,
    },
    reducers: {
      login: (state, action) => {
        state.isAuthenticated = true;
        localStorage.setItem("adminToken", action.payload);
      },
      logout: (state) => {
        state.isAuthenticated = false;
        localStorage.removeItem("adminToken");
      },
    },
  });

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
