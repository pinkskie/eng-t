import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface IList {
  id: number;
  text: string;
}

const initialState: IList[] = [];

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addToList: (state, action) => {
      state.push(action.payload);
    },
    removeFromList: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToList, removeFromList } = listSlice.actions;

export const selectList = (state: RootState) => state.list;

export default listSlice.reducer;
