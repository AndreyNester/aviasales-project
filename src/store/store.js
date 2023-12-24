/* eslint-disable import/prefer-default-export */
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { reducer as checkboxFilterReducer } from './checkboxFilter/checkboxFilter.slice.js';
import { reducer as createGuestIdSlice } from './loadingGuestSession/loadingGuestSession.slice';
import { reducer as searchListReducer } from './searchList/searchList.slice';
import { reducer as shownListReducer } from './shownList/shownList.slice';
import { reducer as switcherReducer } from './switcher/switcher.slice';

const reducers = combineReducers({
  switcher: switcherReducer,
  checkboxFilter: checkboxFilterReducer,
  searchList: searchListReducer,
  createGuestId: createGuestIdSlice,
  shownList: shownListReducer,
});

export const store = configureStore({
  reducer: {
    reducers,
  },
});
