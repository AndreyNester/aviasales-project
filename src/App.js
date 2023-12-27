import { Flex, Layout } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import style from './App.module.css';
import './commonStyles/reset/reset.css';
import HeaderContent from './components/HeaderContent/HeaderContent';
import LayoutBody from './components/LayoutBody/LayoutBody';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import './components/SiderList/SiderList.scss';
import { fetchGuestId } from './store/loadingGuestSession/loadingGuestSession.slice';

const { Header } = Layout;

function App() {
  const { app, layoutFlex, layoutWrapper, layoutHeader } = style;

  const guestLoaded = useSelector((state) => state.reducers.createGuestId.loaded);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGuestId());
  }, []);

  return (
    <div className={app}>
      <Flex className={layoutFlex} gap="middle" wrap="wrap">
        <Layout className={layoutWrapper}>
          <Header className={layoutHeader}>
            <HeaderContent />
          </Header>
          {guestLoaded ? <LayoutBody /> : <LoadingSpinner />}
        </Layout>
      </Flex>
    </div>
  );
}

export default App;
