import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: !!localStorage.getItem("adminToken"), // تحقق إذا كان المستخدم قد سجل دخول
};

const authSlice = createSlice({
    name: "auth",
    initialState: {
      isAuthenticated: !!localStorage.getItem("adminToken"),
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
