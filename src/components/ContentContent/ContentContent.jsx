/* eslint-disable import/order */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Spin } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actions } from '../../store/shownList/shownList.slice';
import ErrorSearch from '../ErrorSearch/ErrorSearch';
import SearchBtnGroup from '../SearchBtnGroup/SearchBtnGroup';
import ShowMoreBtn from '../ShowMoreBtn/ShowMoreBtn';
import SiderList from '../SiderList/SiderList';
import '../SiderList/SiderList.scss';
import Switcher from '../Switcher/Switcher';
import TicketList from '../TicketList/TicketList';
import styles from './styles/ContentContent.module.css';
import './styles/ContentContent.scss';

function ContentContent() {
  const { layoutSidebar } = styles;
  const { status: searchStatus, list } = useSelector((state) => state.reducers.searchList);

  const dispatch = useDispatch();

  const { currentBunch, agregatedList } = useSelector((state) => state.reducers.shownList);

  useEffect(() => {
    dispatch(actions.resetList({ list }));
  }, [list]);

  return (
    <>
      <Sider width="100%" className={layoutSidebar}>
        <SiderList />
      </Sider>
      <Switcher />
      <SearchBtnGroup />
      {searchStatus === 'loading' && <Spin size="large" className="cotentContent__loadingSpin" />}
      {searchStatus === 'rejected' && <ErrorSearch />}
      {agregatedList.length ? <TicketList list={agregatedList[currentBunch]} /> : null}
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
