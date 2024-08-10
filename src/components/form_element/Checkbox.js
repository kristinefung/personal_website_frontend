import { getRandomString } from 'utils/common';

const Checkbox = ({ label, isChecked, onChange }) => {
  const id = 'checkbox-' + getRandomString(10);

  return (
    <>
      <div className='form-element'>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          type="checkbox"
          checked={isChecked}
          onChange={onChange}
        />
      </div>
    </>
  )
}

export default Checkbox