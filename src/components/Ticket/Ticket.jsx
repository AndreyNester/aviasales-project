/* eslint-disable import/order */
import classNames from 'classnames';

import TicketInfoList from '../TicketInfoList/TicketInfoList';
import './Ticket.scss';

function Ticket(props) {
  const {
    el: { price, carrier, segments },
  } = props;

  const classNamesImg = classNames({
    ticket__imgField: true,
    [carrier]: true,
  });

  return (
    <li className="ticket">
      <header className="ticket__header">
        <span className="ticket__price">{price} P</span>

        <div className={classNamesImg}> </div>
      </header>
      <TicketInfoList segments={segments[0]} />
      <TicketInfoList segments={segments[1]} />
    </li>
  );
}

export default Ticket;
