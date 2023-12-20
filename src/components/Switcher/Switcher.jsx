/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actions } from '../../store/switcher/switcher.slice';
import './Switcher.scss';

function Switcher() {
  const selectedItem = useSelector((state) => state.reducers.switcher);

  const dispatch = useDispatch();

  return (
    <div className="switcher__group">
      <label className={`switcher__container ${selectedItem === 10 && 'selected'}`} htmlFor={10}>
        самый дешевый
        <input type="radio" id={10} name="some" onChange={() => dispatch(actions.switchRadio(10))} />
        <span className="checkmark" />
      </label>

      <label className={`switcher__container ${selectedItem === 11 && 'selected'}`} htmlFor={11}>
        самый быстрый
        <input type="radio" id={11} name="some" onChange={() => dispatch(actions.switchRadio(11))} />
        <span className="checkmark" />
      </label>

      <label className={`switcher__container ${selectedItem === 12 && 'selected'}`} htmlFor={12}>
        оптимальный
        <input type="radio" id={12} name="some" onChange={() => dispatch(actions.switchRadio(12))} />
        <span className="checkmark" />
      </label>
    </div>
  );
}

export default Switcher;
