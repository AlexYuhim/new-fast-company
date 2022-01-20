import React from 'react'
import PropTypes from 'prop-types'
import TableHeader from '../../common/table/tableHedar'
import TableBody from '../../common/table/tableBody'

const Table = ({ onSort, selectedSort, columnns, data, children }) => {
  return (
    <table className="table">
      {children || (
        <>
          <TableHeader {...{ onSort, selectedSort, columnns }} />
          <TableBody {...{ columnns, data }} />
        </>
      )}
    </table>
  )
}
Table.propTypes = {
  onSort: PropTypes.func,
  selectedSort: PropTypes.object,
  columnns: PropTypes.object,
  data: PropTypes.array,
  children: PropTypes.array,
}
export default Table
