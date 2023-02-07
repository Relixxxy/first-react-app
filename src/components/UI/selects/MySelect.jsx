const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option disabled value="">
        {defaultValue}
      </option>
      {options &&
        options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
    </select>
  );
};

export default MySelect;
