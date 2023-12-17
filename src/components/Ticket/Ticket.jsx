/* eslint-disable import/order */
import TicketInfoList from '../TicketInfoList/TicketInfoList';
import './Ticket.scss';
import logotype from './img/logoAirLines.png';

function Ticket() {
  return (
    <div className="ticket">
      <header className="ticket__header">
        <span className="ticket__price">13 400 Р</span>
        <img src={logotype} alt="logotyle Airlines" />
      </header>
      <TicketInfoList />
      <TicketInfoList />
    </div>
  );
}

export default Ticket;
