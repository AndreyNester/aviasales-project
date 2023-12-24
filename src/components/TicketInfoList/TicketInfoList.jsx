import TicketInfoItem from '../TicketInfoItem/TicketInfoItem';
import './TicketInfoList.scss';

function TicketInfoList(props) {
  const { segments } = props;
  return (
    <ul className="ticket__infoList">
      <TicketInfoItem segments={segments} />
    </ul>
  );
}

export default TicketInfoList;
