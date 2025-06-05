import React from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      userId: null ,
      accessToken: ""
    }),
    {
      name: "user-store"
    }
  )
)


export default useAuthStore;
