const RenderOption = ({ value, name, defaultValue }) => {
  const optionName = `${name[0].toUpperCase()}${name.slice(1)}`;
  const isSelected = defaultValue === value;

  return (
    <option selected={isSelected} value={value}>
      {optionName}
    </option>
  );
};

const Select = ({ options, defaultValue }) => {
  return (
    <div>
      <select>
        {options.map((option) => (
          <RenderOption
            key={option.code}
            value={option.code}
            name={option.statusText}
            defaultValue={defaultValue}
          />
        ))}
      </select>
    </div>
  );
};

export default Select;
