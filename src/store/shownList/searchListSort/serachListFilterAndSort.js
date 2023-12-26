/* eslint-disable no-param-reassign */
import uniqid from 'uniqid';

import filterTickets from './filterTickets';
import sortTickets from './sortTickets';

function serachListFilterAndSort(data) {
  // eslint-disable-next-line no-unused-vars
  const { filtersStatus, globList, switcherStatus } = data;
  console.log(data.globList);

  const newArr = globList.map((el) => {
    return {
      ...el,
      id: uniqid(),
    };
  });

  const filteredTickets = filterTickets(newArr, filtersStatus);
  const sortedTickets = sortTickets(switcherStatus, filteredTickets);

  return sortedTickets;
}

export default serachListFilterAndSort;
