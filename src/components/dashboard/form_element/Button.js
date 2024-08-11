const Button = (
  {
    label,
    onClick,
    styleIsReversed = false,
    type = "button"
  }) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={(styleIsReversed ? 'btn-reverse' : 'btn-normal') + ' form-btn'}
      >
        {label}
      </button>
    </>
  )
}

export default Button