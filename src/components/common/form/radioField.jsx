import React from 'react'
import PropTypes from 'prop-types'
const RadioFild = ({ options, name, onChange, value, label }) => {
  const handleChenge = ({ target }) => {
    onChange({ name: [target.name], value: target.value })
  }
  return (
    <div className="mt-4">
      <label htmlFor="validationCustom04" className="form-label">
        {label}
      </label>
      <div>
        {options.map((option) => (
          <div
            key={option.name + '_' + option.value}
            className="form-check form-check-inline"
          >
            <input
              className="form-check-input"
              type="radio"
              name={name}
              id={option.name + '_' + option.value}
              value={option.value}
              checked={option.value === value}
              onChange={handleChenge}
            />
            <label
              className="form-check-label"
              htmlFor={option.name + '_' + option.value}
            >
              {option.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}
RadioFild.propTypes = {
  options: PropTypes.array,
  name: PropTypes.string,
  onChenge: PropTypes.func,
  value: PropTypes.string,
  label: PropTypes.string,
}
export default RadioFild
