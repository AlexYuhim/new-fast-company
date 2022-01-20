import React from 'react'
import PropTypes from 'prop-types'
const SelectField = ({
  label,
  value,
  onChange,
  defaultOption,
  options,
  name,
  error,
}) => {
  const handleChenge = ({ target }) => {
    onChange({ name: target.name, value: target.value })
  }
  let optionsArray =
    !Array.isArray(options) && typeof options === 'object'
      ? Object.keys(options).map((optionName) => ({
          name: options[optionName].name,
          value: options[optionName]._id,
        }))
      : options
  const getInputClass = () => {
    return 'form-select ' + (error ? ' is-invalid' : '')
  }
  return (
    <div className="mt-4 mb-4">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <select
        className={getInputClass()}
        id={name}
        value={value}
        name={name}
        onChange={handleChenge}
      >
        <option disabled value="">
          {defaultOption}
        </option>

        {optionsArray &&
          optionsArray.map((option) => (
            <option value={option.value} key={option.value}>
              {option.name}
            </option>
          ))}
        {/* {Object.keys(profession).map((professionName) => (
          <option
            key={profession[professionName]._id}
            value={profession[professionName]._id}
          >
            {profession[professionName].name}
          </option>
        ))} */}
      </select>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}
SelectField.propTypes = {
  label: PropTypes.string,
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  defaultOption: PropTypes.string,
}
export default SelectField
