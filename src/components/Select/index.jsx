import styled from './styles.module.scss';

const RenderOption = ({ value, name, defaultValue }) => {
  const optionName = `${name[0].toUpperCase()}${name.slice(1)}`;
  const isSelected = defaultValue === value;

  return (
    <option selected={isSelected} value={value}>
      {optionName}
    </option>
  );
};

const Select = ({ options, defaultValue, editValue, editedKey }) => {
  return (
    <div>
      <select
        className={styled.select}
        onChange={(e) => editValue(editedKey, e.target.value)}
      >
        {options.map((option) => (
          <RenderOption
            key={option.code}
            value={option.code}
            name={option.statusText}
            defaultValue={defaultValue}
            editValue={editValue}
          />
        ))}
      </select>
    </div>
  );
};

export default Select;
