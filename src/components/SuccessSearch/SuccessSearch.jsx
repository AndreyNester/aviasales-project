import { Alert } from 'antd';
import React from 'react';

import './SuccessSearch.scss';

function SuccessSearch() {
  return <Alert className="successSearch" message="All tickets successfully downloaded !" type="success" />;
}

export default SuccessSearch;
