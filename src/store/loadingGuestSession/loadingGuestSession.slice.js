/* eslint-disable no-param-reassign */

/* eslint-disable import/prefer-default-export */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  guestId: '',
  loaded: false,
  error: null,
};

export const fetchGuestId = createAsyncThunk('createGuestIdSlice/fetchGuestId', async function () {
  const some = await fetch('https://aviasales-test-api.kata.academy/search').then((response) => response.json());

  return some.searchId;
});

export const createGuestIdSlice = createSlice({
  name: 'createGuestId',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGuestId.pending, () => {});
    builder.addCase(fetchGuestId.fulfilled, (state, action) => {
      state.loaded = true;
      state.guestId = action.payload;
    });
  },
});

export const { actions, reducer } = createGuestIdSlice;
