import { Input } from '../../../../components';

import styled from './styles.module.scss';

const SearchBar = ({ filterClients }) => {
  return (
    <div className={styled.searchBar}>
      <Input wrapperClassName={styled.searchInput} onChange={filterClients} />
    </div>
  );
};

export default SearchBar;
