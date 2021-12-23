import React from 'react'
import PropTypes from 'prop-types'
import User from './user'
import TableHeader from './tableHedar'
const UserTable = ({ users, onSort, selectedSort, ...prop }) => {
  const columnns = {
    name: { iter: 'name', name: 'Имя' },
    profession: { iter: 'profession.name', name: 'Профессия' },
    qualittes: { name: 'Качества' },
    completedMeetings: { iter: 'completedMeetings', name: 'Количество встреч' },
    rate: { iter: 'rate', name: 'рейтинг' },
    bookmark: { iter: 'bookmark', name: 'Избранное' },
    delete: {},
  }
  return (
    <table className="table">
      <TableHeader {...{ onSort, selectedSort, columnns }} />

      <tbody>
        {users.map((user) => {
          return (
            <User
              className="d-flex justify-content-center"
              key={user._id}
              {...user}
              {...prop}
            />
          )
        })}
      </tbody>
    </table>
  )
}
UserTable.propTypes = {
  users: PropTypes.array,
  currentSort: PropTypes.object,
  onSort: PropTypes.func,
}
export default UserTable
