import { format, intervalToDuration } from 'date-fns';

import './TicketInfoItem.scss';

function TicketInfoItem(props) {
  const {
    segments: { origin, destination, date, duration, stops },
  } = props;

  const start = format(date, 'hh:mm ');
  const arrivedAt = format(new Date(date).getTime() + duration * 60 * 1000, 'hh:mm');
  const travelTime = intervalToDuration({
    start: new Date(date),
    end: new Date(new Date(date).getTime() + duration * 60 * 1000),
  });

  return (
    <li className="ticket__infoItem">
      <div className="option">
        <h3>
          {origin} - {destination}
        </h3>
        <div>
          {start} - {arrivedAt}
        </div>
      </div>

      <div className="option">
        <h3>В ПУТИ</h3>
        <div>
          {travelTime.hours}ч {travelTime.minutes}м
        </div>
      </div>

      <div className="option transfer">
        <h3>{stops.length} ПЕРЕСАДКИ</h3>
        <div>{stops.map((el) => ` ${el}, `)}</div>
      </div>
    </li>
  );
}

export default TicketInfoItem;
