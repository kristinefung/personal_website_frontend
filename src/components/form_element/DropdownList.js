import { getRandomString } from 'utils/common';

const DropdownList = (
  {
    label,
    value,
    onChange,
    options = [{ label: "", value: "" }],
    isDisabled = false,
    errorMsg
  }) => {
  const id = 'dropdownlist-' + getRandomString(10);

  return (
    <>
      <div className='form-element'>
        <div className='row'>
          <label htmlFor={id}>{label}</label>
          <div className='error-msg'>{errorMsg}</div>
        </div>
        <select
          id={id}
          className={errorMsg ? 'error-field' : ''}
          value={value}
          onChange={onChange}
          disabled={isDisabled}
        >
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