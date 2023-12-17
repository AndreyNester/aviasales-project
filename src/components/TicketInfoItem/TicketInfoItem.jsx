import './TicketInfoItem.scss';

function TicketInfoItem() {
  return (
    <li className="ticket__infoItem">
      <div className="option">
        <h3>MOW-HKT</h3>
        <div>10:45 - 08:00</div>
      </div>

      <div className="option">
        <h3>В ПУТИ</h3>
        <div>21ч 15м</div>
      </div>

      <div className="option transfer">
        <h3>2 ПЕРЕСАДКИ</h3>
        <div>HKG, JNB</div>
      </div>
    </li>
  );
}

export default TicketInfoItem;
