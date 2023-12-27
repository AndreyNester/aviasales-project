/* eslint-disable no-param-reassign */

/* eslint-disable no-plusplus */

/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';

// eslint-disable-next-line import/order
import { fetchSearch } from '../searchList/searchList.slice';
import serachListFilterAndSort from './searchListSort/serachListFilterAndSort';
// import { resetListAction } from './shownListActions/resetListAction';
import { showMoreAction } from './shownListActions/showMoreACtion';

const initialState = {
  currentBunch: 0,
  totalList: [],
  agregatedList: [],
  agregatedListT: [],
};

export const shownListSlice = createSlice({
  name: 'shownList',
  initialState,
  reducers: {
    addSortedArr: (state, action) => {
      state.agregatedListT = [...state.agregatedListT, [...serachListFilterAndSort(action.payload).slice(0, 5)]];
    },
    showMore: (state) => showMoreAction(state),
    // resetList: (state, action) => resetListAction(state, action),
    // peresort: (state, action) => {},

    peresort: (state, action) => {
      // const { switcherStatus, globList, filtersStatus } = action.payload;
      const { filtersStatus, globList, switcherStatus } = action.payload;
      state.currentBunch = 0;
      state.agregatedListT = globList.map((el) => {
        return serachListFilterAndSort({ filtersStatus, globList: el, switcherStatus }).slice(0, 5);
      });
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
