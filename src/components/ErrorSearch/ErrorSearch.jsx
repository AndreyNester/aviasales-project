import { Alert } from 'antd';
import React from 'react';

import './ErrorSearch.scss';

function ErrorSearch() {
  return (
    <Alert
      className="errorSearch"
      message="Search error"
      description="something wrong with server. Try again"
      type="error"
    />
  );
}

export default ErrorSearch;
