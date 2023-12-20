import { useDispatch } from 'react-redux';

import { actions } from '../../store/checkboxFilter/checkboxFilter.slice.js';

function Checkbox(props) {
  const { id, description, checked } = props;
  const dispatch = useDispatch();
  return (
    <label htmlFor={id}>
      <input type="checkbox" id={id} checked={checked} onChange={() => dispatch(actions.filterOn({ id }))} />
      <span className="cusomCheckbox"> </span>
      <span>{description}</span>
    </label>
  );
}

export default Checkbox;
