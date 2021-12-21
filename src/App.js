import React, { useState, useEffect } from 'react'
import api from './api'
import Users from './components/users'

const App = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    api.users.fetchAll().then((data) => setUsers(data))
  }, [])

  // const counter = users.length
  const hendelFavoritClik = (id, stat) => {
    const status = users.map((event) => {
      if (event._id === id) {
        if (!stat) {
          return { ...event, bookmark: true }
        } else {
          return {
            ...event,
            bookmark: false,
          }
        }
      }
      return event
    })
    setUsers(status)
  }

  const handelDeleteUser = (id) => {
    return setUsers(users.filter((e) => e._id !== id))
  }

  return (
    <>
      {users && (
        <Users
          users={users}
          // counter={counter}
          onhandelDeleteUser={handelDeleteUser}
          onhendelFavoritClik={hendelFavoritClik}
        />
      )}
    </>
  )
}
export default App
