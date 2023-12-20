/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';

const initialState = 10;

export const switcherSlice = createSlice({
  name: 'switcher',
  initialState,
  reducers: {
    switchRadio: (state, action) => {
      const id = action.payload;
      return id;
    },
  },
});

export const { actions, reducer } = switcherSlice;
