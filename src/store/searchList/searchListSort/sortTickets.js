import sortByOptionally from './sortActions/sortByOptionally';
import sortByPrice from './sortActions/sortByPrice';
import sortBySpeed from './sortActions/sortBySpeed';

const sortTickets = (switcherStatus, filteredTickets) => {
  const tickets = filteredTickets;
  switch (switcherStatus) {
    case 10: // самый дешевый
      return sortByPrice(tickets);

    case 11: // самый быстрый
      return sortBySpeed(tickets);

    case 12: // оптимальный
      return sortByOptionally(tickets);

    default:
      break;
  }
  return switcherStatus;
};

export default sortTickets;
