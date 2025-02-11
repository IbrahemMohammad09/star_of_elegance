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
        console.log("User logged in, token:", localStorage.getItem("adminToken")); // ✅ تحقق من وجود التوكن
      },
      logout: (state) => {
        console.log("Logging out..."); // تحقق من استدعاء الدالة
        state.isAuthenticated = false;
        localStorage.removeItem("adminToken");
        console.log("User logged out, token removed:", localStorage.getItem("adminToken")); // ✅ تحقق من حذف التوكن
      },
    },
  });

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
