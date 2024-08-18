import { getRandomString } from 'utils/common';

const Textarea = ({
  label,
  value,
  onChange,
  errorMsg,
  isDisabled = false
}) => {
  const id = 'textarea-' + getRandomString(10);
  return (
    <>
      <div className='form-element'>
        <div className='row'>
          <label htmlFor={id}>{label}</label>
          <div className='error-msg'>{errorMsg}</div>
        </div>
        <textarea
          id={id}
          className={errorMsg ? 'error-field' : ''}
          value={value}
          onChange={onChange}
          disabled={isDisabled}
        />
      </div>
    </>
  )
}

export default Textarea