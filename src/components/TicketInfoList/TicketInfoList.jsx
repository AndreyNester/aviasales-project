import TicketInfoItem from '../TicketInfoItem/TicketInfoItem';
import './TicketInfoList.scss';

function TicketInfoList() {
  return (
    <ul className="ticket__infoList">
      <TicketInfoItem />
    </ul>
  );
}

export default TicketInfoList;
