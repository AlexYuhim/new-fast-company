import React from 'react'
import PropTypes from 'prop-types'
// import TableHeader from './tableHedar'
// import TableBody from './tableBody'
import Favorites from '../../common/favorites'
import DeleteUser from './deleteUser'
import 'bootstrap-icons/font/bootstrap-icons.css'
import QualitiesList from '../../ui/qualities/qualitiesList'
import Table from './table'

const UserTable = ({
  users,
  onSort,
  onHandleFavoritClik,
  selectedSort,
  onHandleDeleteUser,
  ...prop
}) => {
  const columnns = {
    name: { path: 'name', name: 'Имя' },
    profession: { path: 'profession.name', name: 'Профессия' },
    qualittes: {
      name: 'Качества',
      component: (user) => <QualitiesList qualities={user.qualities} />,
    },
    completedMeetings: { path: 'completedMeetings', name: 'Количество встреч' },
    rate: { path: 'rate', name: 'рейтинг' },
    bookmark: {
      path: 'bookmark',
      name: 'Избранное',
      component: (user) => (
        <Favorites
          id={user._id}
          onHandleFavoritClik={onHandleFavoritClik}
          bookmark={user.bookmark}
          {...user}
        />
      ),
    },
    delete: {
      component: (user) => (
        <DeleteUser id={user._id} onHandleDeleteUser={onHandleDeleteUser} />
      ),
    },
  }
  return (
    // <Table>
    //   <TableHeader {...{ onSort, selectedSort, columnns }} />
    //   <TableBody {...{ columnns, data: users }} />
    // </Table>
    <Table
      onSort={onSort}
      selectedSort={selectedSort}
      columnns={columnns}
      data={users}
    />
  )
}
UserTable.propTypes = {
  users: PropTypes.array,
  currentSort: PropTypes.object,
  onSort: PropTypes.func,
}
export default UserTable
