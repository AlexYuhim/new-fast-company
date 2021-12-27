import React from 'react'
import PropTypes from 'prop-types'
import ShoweCaret from './showeCaret'

const TableHeader = ({ onSort, selectedSort, columnns }) => {
  const caretMove = (target) => {
    // console.log('target', target)
    // console.log('selectedSort', selectedSort)
    if (target) {
      if (selectedSort.path === target) {
        return <ShoweCaret selectedSort={selectedSort} />
      }
    }
    return null
  }

  const handleSort = (items) => {
    if (selectedSort.path === items) {
      onSort({
        ...selectedSort,
        order: selectedSort.order === 'asc' ? 'desc' : 'asc',
      })
    } else {
      onSort({ path: items, order: 'asc' })
    }
  }
  return (
    <thead>
      <tr>
        {Object.keys(columnns).map((column) => (
          <th
            key={column}
            onClick={
              columnns[column].path
                ? () => handleSort(columnns[column].path)
                : undefined
            }
            {...{ role: columnns[column].path && 'button' }}
            scope="col"
          >
            {columnns[column].name}
            {caretMove(columnns[column].path)}
          </th>
        ))}
      </tr>
    </thead>
  )
}
TableHeader.propTypes = {
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  columnns: PropTypes.object.isRequired,
  caretMove: PropTypes.func,
}

export default TableHeader
