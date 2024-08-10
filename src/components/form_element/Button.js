const Button = (
  {
    label,
    onClick,
    styleIsReversed = false
  }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={(styleIsReversed ? 'btn-reverse' : 'btn-normal') + ' form-btn'}
      >
        {label}
      </button>
    </>
  )
}

export default Button