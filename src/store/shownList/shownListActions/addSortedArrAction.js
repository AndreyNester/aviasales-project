import serachListFilterAndSort from '../searchListSort/utils/serachListFilterAndSort';

/* eslint-disable no-param-reassign */
function addSortedArrAction(state, action) {
  state.agregatedListT = [...state.agregatedListT, [...serachListFilterAndSort(action.payload).slice(0, 5)]];
  state.totalFilteredList = state.agregatedListT;
}

export default addSortedArrAction;
