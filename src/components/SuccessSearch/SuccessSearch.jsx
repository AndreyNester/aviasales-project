import { Alert } from 'antd';
import classNames from 'classnames';
// eslint-disable-next-line import/order
import React, { useEffect, useState } from 'react';

import './SuccessSearch.scss';

function SuccessSearch() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setTimeout(() => setHidden(true), 3000);
  }, []);

  const classnamesOfSuccessAlert = classNames({
    successSearch: true,
    hidden,
  });
  return <Alert className={classnamesOfSuccessAlert} message="All tickets successfully downloaded !" type="success" />;
}

export default SuccessSearch;
