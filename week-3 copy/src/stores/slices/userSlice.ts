import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  username: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
