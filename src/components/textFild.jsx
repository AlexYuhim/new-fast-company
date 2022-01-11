import React from 'react'
import PropTypes from 'prop-types'
const TextFild = ({ label, type, name, value, onChange, error }) => {
  return (
    <div>
      <label htmlFor={name}> {label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <p>{error}</p>}
    </div>
  )
}
TextFild.defaultProps = {
  type: 'text',
}
TextFild.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
}
export default TextFild
