/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import './Switcher.scss';

function Switcher() {
  return (
    <div className="switcher__group">
      <label className="switcher__container selected" htmlFor="01">
        самый дешевый
        <input type="radio" id="01" name="some" onChange={() => console.log(0)} />
        <span className="checkmark" />
      </label>

      <label className="switcher__container  " htmlFor="11">
        самый быстрый
        <input type="radio" id="11" name="some" onChange={() => console.log(1)} />
        <span className="checkmark" />
      </label>

      <label className="switcher__container " htmlFor="21">
        оптимальный
        <input type="radio" id="21" name="some" onChange={() => console.log(2)} />
        <span className="checkmark" />
      </label>
    </div>
  );
}

export default Switcher;
