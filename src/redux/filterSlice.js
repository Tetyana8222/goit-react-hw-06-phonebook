import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      return action.payload;
      // state.filter = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
