import { getRandomString } from 'utils/common';

const DropdownList = ({ label, value, onChange, options = [{ label: "", value: "" }] }) => {
  const id = 'dropdownlist-' + getRandomString(10);

  return (
    <>
      <div className='form-element'>
        <label htmlFor={id}>{label}</label>
        <select id={id} value={value} onChange={onChange}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}

export default DropdownList;