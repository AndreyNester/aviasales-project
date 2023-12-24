import { Button } from 'antd';
import { useDispatch } from 'react-redux';

import { actions } from '../../store/shownList/shownList.slice';
import './ShowMoreBtn.scss';

function ShowMoreBtn(props) {
  const { value, disabled } = props;
  const dispatch = useDispatch();
  return (
    <Button
      type="primary"
      block
      className="ShowMoreBtn"
      onClick={() => dispatch(actions.showMore())}
      disabled={disabled}
    >
      {value}
    </Button>
  );
}

export default ShowMoreBtn;
