import React from 'react'

const DeleteUser = ({ id, onHandleDeleteUser }) => {
  return (
    <button
      key={id}
      className="badge btn-danger m-2"
      onClick={() => onHandleDeleteUser(id)}
    >
      Delete
    </button>
  )
}
export default DeleteUser
