import classNames from 'classnames';

import styled from './styles.module.scss';

const Input = ({ wrapperClassName, onChange }) => {
  return (
    <input
      type="text"
      className={classNames(styled.input, wrapperClassName)}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;
