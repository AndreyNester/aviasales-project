/* eslint-disable no-param-reassign */

/* eslint-disable import/prefer-default-export */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import serachListFilterAndSort from './searchListSort/serachListFilterAndSort';

const initialState = {
  list: [],
  status: null,
  error: null,
};

export const fetchSearch = createAsyncThunk('searchListSlice/fetchSearch', async function (action) {
  const { sessionId, switcherStatus, filtersStatus } = action;

  const responce = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${sessionId}`).then(
    (response) => response.json()
  );

  return { responce, switcherStatus, filtersStatus };
});

export const searchListSlice = createSlice({
  name: 'searchList',
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchSearch.pending, (state) => {
      state.list = [];
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(fetchSearch.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.list = serachListFilterAndSort(action.payload);
    });
    builder.addCase(fetchSearch.rejected, (state) => {
      state.status = 'rejected';
      state.list = [];
    });
  },
});

export const { actions, reducer } = searchListSlice;
