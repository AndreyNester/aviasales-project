// eslint-disable-next-line import/no-extraneous-dependencies
import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { fetchSearch } from '../../store/searchList/searchList.slice';
// import { actions } from '../../store/shownList/shownList.slice';
import './SearchBtnGroup.scss';

function SearchBtnGroup() {
  const dispatch = useDispatch();

  const sessionId = useSelector((state) => state.reducers.createGuestId.guestId);
  const switcherStatus = useSelector((state) => state.reducers.switcher);
  const filtersStatus = useSelector((state) => state.reducers.checkboxFilter);
  const { status: searchStatus, started } = useSelector((state) => state.reducers.searchList);

  const classnamesOfSearchBtnGroup = classNames({
    contentContent__Btn: true,
    hidden: started,
  });

  return (
    <Button
      className={classnamesOfSearchBtnGroup}
      type="primary"
      onClick={() => dispatch(fetchSearch({ sessionId, switcherStatus, filtersStatus }))}
      icon={<SearchOutlined />}
      loading={searchStatus === 'loading'}
    >
      Search
    </Button>
  );
}

export default SearchBtnGroup;
