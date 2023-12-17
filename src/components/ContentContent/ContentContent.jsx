/* eslint-disable import/order */
import Sider from 'antd/es/layout/Sider';

import ShowMoreBtn from '../ShowMoreBtn/ShowMoreBtn';
// eslint-disable-next-line import/order
import SiderList from '../SiderList/SiderList';
import '../SiderList/SiderList.scss';
import Switcher from '../Switcher/Switcher';
import TicketList from '../TicketList/TicketList';
import styles from './styles/ContentContent.module.css';
import './styles/ContentContent.scss';

function ContentContent() {
  const { layoutSidebar } = styles;
  return (
    <>
      <Sider width="100%" className={layoutSidebar}>
        <SiderList />
      </Sider>
      <Switcher />
      <TicketList />
      <ShowMoreBtn />
    </>
  );
}

export default ContentContent;
