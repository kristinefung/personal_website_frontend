import { getRandomString } from 'utils/common';


const InputText = ({ label, value, onChange }) => {
  const id = 'text-' + getRandomString(10);

  return (
    <>
      <div className='form-element'>
        <label htmlFor={id}>{label}</label>
        <input
          type="text"
          id={id}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  )
}

export default InputText;