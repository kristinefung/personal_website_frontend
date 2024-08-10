import { getRandomString } from 'utils/common';

const Textarea = ({ label, value, onChange }) => {
  const id = 'textarea-' + getRandomString(10);
  return (
    <>
      <div className='form-element'>
        <label htmlFor={id}>{label}</label>
        <textarea id={id} value={value} onChange={onChange} />
      </div>
    </>
  )
}

export default Textarea