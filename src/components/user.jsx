import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import api from '../api'
import Qualities from './qualities'

const User = () => {
  const { userId } = useParams()
  const history = useHistory()
  const [user, setUser] = useState()
  useEffect(() => {
    api.users.getById(userId).then((data) => setUser(data))
  }, [])
  const handleReLoad = () => {
    history.push('/users')
  }

  return (
    <>
      {user ? (
        <>
          <h1>{user.name}</h1>
          <p>{`Профессия : ${user.profession.name}`}</p>
          {user.qualities.map((qullit) => (
            <Qualities key={qullit._id} {...qullit} />
          ))}

          <p>{`Встретился раз : ${user.completedMeetings}`}</p>
          <p>{`Рейтинг : ${user.rate} `}</p>
          <button
            onClick={() => {
              handleReLoad()
            }}
          >
            все пользователи
          </button>
        </>
      ) : (
        <span>Loading....</span>
      )}
    </>
  )
}

export default User
