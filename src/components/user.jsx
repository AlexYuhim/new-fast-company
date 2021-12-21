import React from 'react'
import DeleteUser from './deleteUser'
import Favorites from './favorites'
import Qualities from './qualities'
import 'bootstrap-icons/font/bootstrap-icons.css'
const User = ({
  _id,
  name,
  profession,
  qualities,
  completedMeetings,
  rate,
  bookmark,
  onhandelDeleteUser,
  onhendelFavoritClik,
}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{profession.name}</td>
      <td>
        {qualities.map((item) => (
          <Qualities key={item._id} {...item} />
        ))}
      </td>
      <td>{completedMeetings}</td>
      <td>{rate}/5</td>
      <td>
        <Favorites
          id={_id}
          onhendelFavoritClik={onhendelFavoritClik}
          bookmark={bookmark}
        />
      </td>
      <td>
        <DeleteUser id={_id} onhandelDeleteUser={onhandelDeleteUser} />
      </td>
    </tr>
  )
}
export default User
