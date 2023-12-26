/* eslint-disable no-param-reassign */

/* eslint-disable no-plusplus */

/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';

import serachListFilterAndSort from './searchListSort/serachListFilterAndSort';
import { resetListAction } from './shownListActions/resetListAction';
import { showMoreAction } from './shownListActions/showMoreACtion';

const initialState = {
  currentBunch: 0,
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
    resetList: (state, action) => resetListAction(state, action),
  },
});

export const { actions, reducer } = shownListSlice;
