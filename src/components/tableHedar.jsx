import React from 'react'
import PropTypes from 'prop-types'

const TableHeader = ({ onSort, selectedSort, columnns }) => {
  const handleSort = (items) => {
    if (selectedSort.iter === items) {
      onSort({
        ...selectedSort,
        order: selectedSort.order === 'asc' ? 'desc' : 'asc',
      })
    } else {
      onSort({ iter: items, order: 'asc' })
    }
  }
  return (
    <thead>
      <tr>
        {Object.keys(columnns).map((column) => (
          <th
            key={column}
            onClick={() => {
              handleSort(columnns[column].iter)
            }}
            scope="col"
          >
            {columnns[column].name}
          </th>
        ))}

        {/* <th onClick={() => handleSort('profession.name')} scope="col">
          Профессия
        </th>
        <th scope="col">Качества</th>
        <th onClick={() => handleSort('completedMeetings')} scope="col">
          количество встреч
        </th>
        <th onClick={() => handleSort('rate')} scope="col">
          рейтинг
        </th>
        <th onClick={() => handleSort('bookmark')} scope="col">
          Избранное
        </th>
        <th scope="col"></th> */}
      </tr>
    </thead>
  )
}
TableHeader.propTypes = {
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  columnns: PropTypes.object.isRequired,
}

export default TableHeader
