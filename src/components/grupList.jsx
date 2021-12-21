import React from 'react'
import PropTypes from 'prop-types'
const GroupList = ({
  items,
  valueProperri,
  contyProperti,
  onItemsSelected,
  selectedItem,
}) => {
  console.log('items!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', items)
  return (
    <ul className="list-group">
      {Object.keys(items).map((item) => (
        <li
          key={items[item][valueProperri]}
          className={
            'list-group-item' + (items[item] === selectedItem ? ' active' : '')
          }
          onClick={() => {
            onItemsSelected(items[item]._id)
          }}
          role="button"
        >
          {items[item][contyProperti]}
        </li>
      ))}
    </ul>
  )
}
GroupList.defaultProps = {
  valueProperri: '_id',
  contyProperti: 'name',
}
GroupList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  valueProperri: PropTypes.string,
  contyProperti: PropTypes.string,
  onItemsSelected: PropTypes.func,
  selectedItem: PropTypes.string,
}
export default GroupList
