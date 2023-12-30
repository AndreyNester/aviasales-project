/* eslint-disable no-param-reassign */

/* eslint-disable no-plusplus */

/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';

// eslint-disable-next-line import/order
import { fetchSearch } from '../searchList/searchList.slice';
import serachListFilterAndSort from './searchListSort/serachListFilterAndSort';
import sortTickets from './searchListSort/sortTickets';
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
    addSortedArr: (state, action) => {
      state.agregatedListT = [...state.agregatedListT, [...serachListFilterAndSort(action.payload).slice(0, 5)]];
      state.totalFilteredList = state.agregatedListT;
    },
    showMore: (state) => showMoreAction(state),

    newFilterOn: (state, action) => {
      const { filtersStatus, globList, switcherStatus } = action.payload;
      state.currentBunch = 0;
      state.totalFilteredList = globList.map((el) =>
        serachListFilterAndSort({ filtersStatus, globList: el, switcherStatus })
      );
      state.agregatedListT = state.totalFilteredList.map((el) => el.slice(0, 5));
    },
    newSortOn: (state, action) => {
      state.currentBunch = 0;
      state.agregatedListT = state.totalFilteredList.map((el) =>
        sortTickets(action.payload.switcherStatus, el).slice(0, 5)
      );
    },
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
