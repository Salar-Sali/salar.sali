import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface HeaderState {
  value: string;
}

const initialState: HeaderState = {
  value: "home",
};

export const counterSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setHeader: (state, action: PayloadAction<string>) => {
      const newState = state;
      newState.value = action.payload;
    },
  },
});

export const { setHeader } = counterSlice.actions;
export default counterSlice.reducer;
