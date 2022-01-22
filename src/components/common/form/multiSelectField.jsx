import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'

const MultiSelectField = ({ options, onChange, name, label, defaultValue }) => {
  console.log('defaultValue', defaultValue)
  let optionsArray =
    !Array.isArray(options) && typeof options === 'object'
      ? Object.keys(options).map((optionName) => ({
          label: options[optionName].name,
          value: options[optionName]._id,
        }))
      : options

  const handleChenge = (value) => {
    onChange({ name: name, value })
  }
  return (
    <div className="mt-4 mb-4">
      <label htmlFor="validationCustom04" className="form-label">
        {label}
      </label>
      <Select
        closeMenuOnSelect={false}
        isMulti
        options={optionsArray}
        defaultValue={defaultValue}
        // {defaultValue && defaultValue.map(v => ({ label: v.name, value: v._id, color: v.color }))}
        className="basic-multi-select"
        classNamePrefix={defaultValue}
        onChange={handleChenge}
        name={name}
      />
    </div>
  )
}
MultiSelectField.propTypes = {
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onChange: PropTypes.func,
  name: PropTypes.string,
  defaultValue: PropTypes.array,
  label: PropTypes.string,
}
export default MultiSelectField
