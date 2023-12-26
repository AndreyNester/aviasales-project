import Ticket from '../Ticket/Ticket';
import './TicketList.scss';

function TicketList(props) {
  const { list } = props;
  console.log(list);
  return (
    <ul className="ticketList">
      {list.map((el) => (
        <Ticket el={el} key={el.id} />
      ))}
    </ul>
  );
}

export default TicketList;
