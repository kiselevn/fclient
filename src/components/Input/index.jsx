import classNames from 'classnames';

import styled from './styles.module.scss';

const Input = ({ wrapperClassName }) => {
  return (
    <input type="text" className={classNames(styled.input, wrapperClassName)} />
  );
};

export default Input;
