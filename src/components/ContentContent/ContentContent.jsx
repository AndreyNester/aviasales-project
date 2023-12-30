/* eslint-disable import/order */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Spin } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchSearch } from '../../store/searchList/searchList.slice';
import { actions } from '../../store/shownList/shownList.slice';
import NoFound from '../NoFound/NoFound';
import SearchBtnGroup from '../SearchBtnGroup/SearchBtnGroup';
import ShowMoreBtn from '../ShowMoreBtn/ShowMoreBtn';
import SiderList from '../SiderList/SiderList';
import '../SiderList/SiderList.scss';
import SuccessSearch from '../SuccessSearch/SuccessSearch';
import Switcher from '../Switcher/Switcher';
import TicketList from '../TicketList/TicketList';
import styles from './styles/ContentContent.module.css';
import './styles/ContentContent.scss';
import appropriateList from './utils/appropriateList';

function ContentContent() {
  const { layoutSidebar } = styles;
  const {
    status: searchStatus,
    globList,
    started,
    downloaded,
    noErrors,
  } = useSelector((state) => state.reducers.searchList);
  const { currentBunch, agregatedListT } = useSelector((state) => state.reducers.shownList);

  const sessionId = useSelector((state) => state.reducers.createGuestId.guestId);
  const switcherStatus = useSelector((state) => state.reducers.switcher);
  const filtersStatus = useSelector((state) => state.reducers.checkboxFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    if (started && noErrors) {
      dispatch(actions.addSortedArr({ globList: globList[downloaded - 1], filtersStatus, switcherStatus }));
    }

    if (searchStatus !== 'resolved' && started) {
      dispatch(fetchSearch({ sessionId, switcherStatus, filtersStatus }));
    }
  }, [globList]);

  useEffect(() => {
    dispatch(actions.newFilterOn({ switcherStatus, globList, filtersStatus }));
  }, [filtersStatus]);

  useEffect(() => {
    dispatch(actions.newSortOn({ switcherStatus }));
  }, [switcherStatus]);

  const actiallyList = appropriateList(agregatedListT, currentBunch);

  return (
    <>
      <Sider width="100%" className={layoutSidebar}>
        <SiderList />
      </Sider>
      <Switcher />
      <SearchBtnGroup />
      {searchStatus === 'loading' && <Spin size="large" className="cotentContent__loadingSpin" />}
      {searchStatus === 'resolved' && <SuccessSearch />}
      {agregatedListT.length ? <TicketList list={actiallyList} /> : null}

      {agregatedListT.length ? !agregatedListT[0].length && searchStatus === 'resolved' && <NoFound /> : null}
      {agregatedListT.length
        ? currentBunch < agregatedListT.length - 1 &&
          agregatedListT[0].length && <ShowMoreBtn value="Показать еще 5 билетов" />
        : null}
      {agregatedListT.length
        ? currentBunch === agregatedListT.length - 1 &&
          agregatedListT[0].length && <ShowMoreBtn value="Список билетов кончился" disabled />
        : null}
    </>
  );
}

export default ContentContent;
