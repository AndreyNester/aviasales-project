import { Flex, Layout } from 'antd';

import style from './App.module.css';
import './commonStyles/reset/reset.css';
import ContentContent from './components/ContentContent/ContentContent';
import HeaderContent from './components/HeaderContent/HeaderContent';
import SiderList from './components/SiderList/SiderList';
import './components/SiderList/SiderList.scss';

const { Header, Sider, Content } = Layout;

function App() {
  const {
    app,
    layoutFlex,
    layoutWrapper,
    layoutHeader,
    layoutBody,
    layoutSidebar,
    layoutSidebarDesktop,
    layoutContentWrapper,
  } = style;

  return (
    <div className={app}>
      <Flex className={layoutFlex} gap="middle" wrap="wrap">
        <Layout className={layoutWrapper}>
          <Header className={layoutHeader}>
            <HeaderContent />
          </Header>
          <Layout className={layoutBody}>
            <Sider width="30%" className={`${layoutSidebar} ${layoutSidebarDesktop}`}>
              <SiderList />
            </Sider>
            <Content className={layoutContentWrapper}>
              <ContentContent />
            </Content>
          </Layout>
        </Layout>
      </Flex>
    </div>
  );
}

export default App;
