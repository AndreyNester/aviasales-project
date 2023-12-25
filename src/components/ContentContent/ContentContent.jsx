/* eslint-disable import/order */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Spin } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchSearch } from '../../store/searchList/searchList.slice';
import { actions } from '../../store/shownList/shownList.slice';
import SearchBtnGroup from '../SearchBtnGroup/SearchBtnGroup';
import ShowMoreBtn from '../ShowMoreBtn/ShowMoreBtn';
import SiderList from '../SiderList/SiderList';
import '../SiderList/SiderList.scss';
import SuccessSearch from '../SuccessSearch/SuccessSearch';
import Switcher from '../Switcher/Switcher';
// import TicketList from '../TicketList/TicketList';
import styles from './styles/ContentContent.module.css';
import './styles/ContentContent.scss';

function ContentContent() {
  const { layoutSidebar } = styles;
  const { status: searchStatus, globList, started, downloaded } = useSelector((state) => state.reducers.searchList);
  const { currentBunch, agregatedList } = useSelector((state) => state.reducers.shownList);

  const sessionId = useSelector((state) => state.reducers.createGuestId.guestId);
  const switcherStatus = useSelector((state) => state.reducers.switcher);
  const filtersStatus = useSelector((state) => state.reducers.checkboxFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    if (downloaded === 1) {
      dispatch(actions.showMore({ globList }));
    }

    if (searchStatus !== 'resolved' && started) {
      dispatch(fetchSearch({ sessionId, switcherStatus, filtersStatus }));
    }
  }, [globList]);

  return (
    <>
      <Sider width="100%" className={layoutSidebar}>
        <SiderList />
      </Sider>
      <Switcher />
      <SearchBtnGroup />
      {searchStatus === 'loading' && <Spin size="large" className="cotentContent__loadingSpin" />}
      {searchStatus === 'resolved' && <SuccessSearch />}
      {/* {agregatedList.length ? <TicketList list={agregatedList[currentBunch]} /> : null} */}
      {agregatedList.length
        ? agregatedList[currentBunch].length === 5 && <ShowMoreBtn value="Показать еще 5 билетов" />
        : null}
      {agregatedList.length
        ? agregatedList[currentBunch].length < 5 && <ShowMoreBtn value="Список билетов кончился" disabled />
        : null}
    </>
  );
}

export default ContentContent;
