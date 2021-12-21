import React from 'react'

const DeleteUser = ({ id, onhandelDeleteUser }) => {
  return (
    <button
      key={id}
      className="badge btn-danger m-2"
      onClick={() => onhandelDeleteUser(id)}
    >
      Delete
    </button>
  )
}
export default DeleteUser
