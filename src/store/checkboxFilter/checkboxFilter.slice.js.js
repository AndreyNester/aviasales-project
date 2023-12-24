/* eslint-disable no-param-reassign */

/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';

import { actionFilterOn } from './checkboxFiltersActions/checkboxFiltersActions';
import { initialState } from './checkboxList';

const checkboxFilterSlice = createSlice({
  name: 'checkboxFilter',
  initialState,
  reducers: {
    filterOn: (state, action) => actionFilterOn(state, action),
  },
});

export const { actions, reducer } = checkboxFilterSlice;
