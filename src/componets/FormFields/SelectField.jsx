const SelectField = ({ types, onTypeChange }) => {
  return (
    <select
      onChange={onTypeChange}
      className="border border-[#cdd7e1] min-w-[240px] p-[5px_8px] bg-[#fbfcfe] rounded-[5px] text-[15px]"
    >
      <option value="">Select Type</option>
      {types.map((type) => (
        <option key={type.name} value={type.name}>
          {type.name}
        </option>
      ))}
    </select>
  );
};

export default SelectField;
