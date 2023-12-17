import Ticket from '../Ticket/Ticket';
import './TicketList.scss';

function TicketList() {
  return (
    <ul className="ticketList">
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </ul>
  );
}

export default TicketList;
