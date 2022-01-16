import React, { useState } from 'react'
import PropTypes from 'prop-types'

const TextFild = ({ label, type, name, value, onChange, error }) => {
  const [showPassword, setShowPassword] = useState(false) // следим за состоянием по умолчанию, мы отображаем пароль
  const togleShowPassword = () => {
    setShowPassword((prevState) => !prevState)
  }

  const getInputClass = () => {
    return 'form-control ' + (error ? ' is-invalid' : '')
  }
  /** type={showPassword ? 'text' : type}  меняем тип в зависимости от состояния */
  return (
    <div>
      <label htmlFor={name}> {label}</label>
      <div className="input-group has-validation">
        <input
          type={showPassword ? 'text' : type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={getInputClass()}
        />
        {type === 'password' && (
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={togleShowPassword}
          >
            <i className={'bi bi-eye' + (showPassword ? '-slash' : '')}></i>
          </button>
        )}
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
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
