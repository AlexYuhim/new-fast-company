import React from 'react'
import PropTypes from 'prop-types'

const CheckBoxField = ({ name, value, onChange, children, error }) => {
  //
  const hendleChange = () => {
    onChange({ name: name, value: !value })
  }
  const getInputClass = () => {
    return 'form-check-input ' + (error ? ' is-invalid' : '')
  }
  return (
    <div className="form-check mt-4 mb-4">
      <input
        className={getInputClass()}
        type="checkbox"
        value=""
        id={name}
        onChange={hendleChange}
        checked={value}
      />
      <label className="form-check-label " htmlFor={name}>
        {children}
      </label>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}
CheckBoxField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.oneOfType(
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ),
  error: PropTypes.string,
}

export default CheckBoxField
