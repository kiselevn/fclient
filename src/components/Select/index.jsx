import styled from './styles.module.scss';

const RenderOption = ({ value, name }) => {
  const optionName = `${name[0].toUpperCase()}${name.slice(1)}`;

  return <option value={value}>{optionName}</option>;
};

const Select = ({ options, defaultValue, editValue, editedKey }) => {
  return (
    <div>
      <select
        className={styled.select}
        onChange={(e) => editValue(editedKey, e.target.value)}
        defaultValue={defaultValue}
      >
        {options.map((option) => (
          <RenderOption
            key={option.code}
            value={option.code}
            name={option.statusText}
            editValue={editValue}
          />
        ))}
      </select>
    </div>
  );
};

export default Select;
