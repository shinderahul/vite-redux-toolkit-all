import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Option {
  id: number;
  value: string;
}

interface OptionState {
  list: Option[];
}

const initialState: OptionState = {
  list: [],
};

const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    addOption: (state, action: PayloadAction<Option>) => {
      state.list.push(action.payload);
    },
    deleteOption: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((opt) => opt.id !== action.payload);
    },
    clearOptions: (state) => {
      state.list = [];
    },
  },
});

export const { addOption, deleteOption, clearOptions } = optionsSlice.actions;
export default optionsSlice.reducer;
