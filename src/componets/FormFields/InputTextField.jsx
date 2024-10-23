const InputTextField = ({ onSearchChange, value }) => {
  return (
    <input
      type="text"
      placeholder="Search Pokémon"
      value={value}
      onChange={onSearchChange}
      className="border border-[#cdd7e1] min-w-[240px] p-[5px_8px] bg-[#fbfcfe] rounded-[5px] text-[15px]"
    />
  );
};

export default InputTextField;
