/* eslint-disable no-param-reassign */
import sortTickets from '../searchListSort/utils/sortTickets';

function newSortOnAction(state, action) {
  state.currentBunch = 0;
  state.agregatedListT = state.totalFilteredList.map((el) =>
    sortTickets(action.payload.switcherStatus, el).slice(0, 5)
  );
}

export default newSortOnAction;
