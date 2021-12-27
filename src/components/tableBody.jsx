import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

const TableBody = ({ data, columnns }) => {
  const renderContent = (item, column) => {
    if (columnns[column].component) {
      const component = columnns[column].component
      if (typeof component === 'function') {
        return component(item)
      }
      return component
    }
    return _.get(item, columnns[column].path)
  }
  return (
    <tbody>
      {data.map((item) => (
        <tr key={item._id}>
          {Object.keys(columnns).map((column) => (
            <td key={column}>{renderContent(item, column)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}
TableBody.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.object,
}

export default TableBody
