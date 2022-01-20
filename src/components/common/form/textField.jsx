import React, { useState } from 'react'
import PropTypes from 'prop-types'

const TextField = ({ label, type, name, value, onChange, error }) => {
  const handleChenge = ({ target }) => {
    onChange({ name: [target.name], value: target.value })
  }

  const [showPassword, setShowPassword] = useState(false) // следим за состоянием по умолчанию, мы отображаем пароль
  const togleShowPassword = () => {
    setShowPassword((prevState) => !prevState)
  }

  const getInputClass = () => {
    return 'form-control ' + (error ? ' is-invalid' : '') // метод рендоринга ошибки? генерации класса
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
          onChange={handleChenge}
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
TextField.defaultProps = {
  type: 'text',
}
TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
}
export default TextField
