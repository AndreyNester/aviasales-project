/* eslint-disable no-param-reassign */

/* eslint-disable no-plusplus */

/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';

import { resetListAction } from './shownListActions/resetListAction';
import { showMoreAction } from './shownListActions/showMoreACtion';

const initialState = {
  currentBunch: 0,
  agregatedList: [],
};

export const shownListSlice = createSlice({
  name: 'shownList',
  initialState,
  reducers: {
    showMore: (state) => showMoreAction(state),
    resetList: (state, action) => resetListAction(state, action),
  },
});

export const { actions, reducer } = shownListSlice;
