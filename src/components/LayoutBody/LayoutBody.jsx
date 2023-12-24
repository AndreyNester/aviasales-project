// eslint-disable-next-line import/order
import { Layout } from 'antd';

import ContentContent from '../ContentContent/ContentContent';
// eslint-disable-next-line import/order
import SiderList from '../SiderList/SiderList';
import style from './LayoutBody.module.css';

function LayoutBody() {
  const { layoutBody, layoutSidebar, layoutSidebarDesktop, layoutContentWrapper } = style;

  const { Sider, Content } = Layout;

  return (
    <Layout className={layoutBody}>
      <Sider width="30%" className={`${layoutSidebar} ${layoutSidebarDesktop}`}>
        <SiderList />
      </Sider>
      <Content className={layoutContentWrapper}>
        <ContentContent />
      </Content>
    </Layout>
  );
}

export default LayoutBody;
