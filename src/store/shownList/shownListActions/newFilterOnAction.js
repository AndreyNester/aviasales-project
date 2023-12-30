import serachListFilterAndSort from '../searchListSort/utils/serachListFilterAndSort';

/* eslint-disable no-param-reassign */
function newFilterOnAction(state, action) {
  const { filtersStatus, globList, switcherStatus } = action.payload;
  state.currentBunch = 0;
  state.totalFilteredList = globList.map((el) =>
    serachListFilterAndSort({ filtersStatus, globList: el, switcherStatus })
  );
  state.agregatedListT = state.totalFilteredList.map((el) => el.slice(0, 5));
}

export default newFilterOnAction;
