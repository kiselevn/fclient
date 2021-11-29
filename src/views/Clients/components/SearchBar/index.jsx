import { Input } from '../../../../components';

import styled from './styles.module.scss';

const SearchBar = () => {
  return (
    <div className={styled.searchBar}>
      <Input wrapperClassName={styled.searchInput} />
    </div>
  );
};

export default SearchBar;
