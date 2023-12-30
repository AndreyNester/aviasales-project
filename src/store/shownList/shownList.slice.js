/* eslint-disable no-param-reassign */

/* eslint-disable no-plusplus */

/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';

// eslint-disable-next-line import/order
import { fetchSearch } from '../searchList/searchList.slice';
import addSortedArrAction from './shownListActions/addSortedArrAction';
import newFilterOnAction from './shownListActions/newFilterOnAction';
import newSortOnAction from './shownListActions/newSortOnAction';
import { showMoreAction } from './shownListActions/showMoreACtion';

const initialState = {
  currentBunch: 0,
  totalList: [],
  agregatedList: [],
  totalFilteredList: [],
  agregatedListT: [],
};

export const shownListSlice = createSlice({
  name: 'shownList',
  initialState,
  reducers: {
    addSortedArr: (state, action) => addSortedArrAction(state, action),
    showMore: (state) => showMoreAction(state),
    newFilterOn: (state, action) => newFilterOnAction(state, action),
    newSortOn: (state, action) => newSortOnAction(state, action),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearch.fulfilled, (state, action) => {
      if (action.payload.responce.tickets.length) {
        state.totalList = [...state.totalList, action.payload.responce.tickets];
      }
    });
  },
});

export const { actions, reducer } = shownListSlice;
