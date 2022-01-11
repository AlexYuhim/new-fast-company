import React from 'react'
import PropTypes from 'prop-types'
const TextFild = ({ label, type, name, value, onChange }) => {
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
}
export default TextFild
