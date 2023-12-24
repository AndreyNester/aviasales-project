/* eslint-disable no-param-reassign */
import uniqid from 'uniqid';

import filterTickets from './filterTickets';
import sortTickets from './sortTickets';

function serachListFilterAndSort(data) {
  // eslint-disable-next-line no-unused-vars
  const { filtersStatus, responce, switcherStatus } = data;

  responce.tickets.forEach((el) => {
    el.id = uniqid();
  });

  const filteredTickets = filterTickets(responce, filtersStatus);
  const sortedTickets = sortTickets(switcherStatus, filteredTickets);

  return sortedTickets;
}

export default serachListFilterAndSort;
