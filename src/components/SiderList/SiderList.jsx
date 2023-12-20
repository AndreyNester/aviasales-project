/* eslint-disable react/jsx-boolean-value */
import { useSelector } from 'react-redux';

// eslint-disable-next-line import/order
import CustonCheckbox from '../CustomCheckbox/CustomCheckbox';
import { descriptions } from './descriptions';

function SiderList() {
  const selectedItem = useSelector((state) => state.reducers.checkboxFilter);
  console.log(selectedItem);

  return (
    <div className="siderMobile">
      <h2 className="siderMobile__title">Количество пересадок</h2>
      <form action="" className="siderMobile__filters">
        {selectedItem.map((el, index) => (
          <CustonCheckbox checked={el.active} key={el.id} id={el.id} description={descriptions[index].title} />
        ))}
      </form>
    </div>
  );
}

export default SiderList;
