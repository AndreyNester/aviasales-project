import { Divider, Spin } from 'antd';
import React from 'react';

import './LoadingSpinner.scss';

function LoadingSpinner() {
  return (
    <>
      <Divider />
      <Spin tip="Creating guest session..." size="large" className="loadingSpinner">
        <div className="content" />
      </Spin>
    </>
  );
}

export default LoadingSpinner;
