/* eslint-disable no-param-reassign */

/* eslint-disable import/prefer-default-export */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  globList: [],
  status: null,
  error: null,
  started: false,
  downloaded: 0,
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
      state.started = true;
    });
    builder.addCase(fetchSearch.fulfilled, (state, action) => {
      // console.log(action.payload.responce.stop);
      if (!action.payload.responce.stop) {
        state.status = 'loading';
        state.globList = [...state.globList, [...action.payload.responce.tickets]];
        state.downloaded += 1;
      } else {
        state.status = 'resolved';
      }
    });
    builder.addCase(fetchSearch.rejected, (state) => {
      state.globList = [...state.globList];
    });
  },
});

export const { actions, reducer } = searchListSlice;
