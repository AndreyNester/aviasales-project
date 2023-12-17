/* eslint-disable react/jsx-boolean-value */
import CustonCheckbox from '../CustomCheckbox/CustomCheckbox';

function SiderList() {
  return (
    <div className="siderMobile">
      <h2 className="siderMobile__title">Количество пересадок</h2>
      <form action="" className="siderMobile__filters">
        <CustonCheckbox id={0} description="Все" />
        <CustonCheckbox id={1} description="Без пересадок" />
        <CustonCheckbox id={2} description="1 пересадка" />
        <CustonCheckbox id={3} description="2 пересадка" />
        <CustonCheckbox id={4} description="3 пересадка" />
      </form>
    </div>
  );
}

export default SiderList;
