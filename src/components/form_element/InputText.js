import { getRandomString } from 'utils/common';


const InputText = ({ label, value, onChange, errorMsg }) => {
  const id = 'text-' + getRandomString(10);

  return (
    <>
      <div className='form-element'>
        <div className='row'>
          <label htmlFor={id}>{label}</label>
          <div className='error-msg'>{errorMsg}</div>
        </div>
        <input
          id={id}
          className={errorMsg ? 'error-field' : ''}
          type="text"
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  )
}

export default InputText;