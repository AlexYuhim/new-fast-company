import React from 'react'
const SherchUser = ({ sherсh, onhandleShershUser }) => {
  return (
    <form action="">
      <div>
        <label htmlFor="shersh"></label>
        <input
          type="shersh"
          id="shersh"
          value={sherсh}
          onChange={onhandleShershUser}
          placeholder="Search..."
        />
      </div>
    </form>
  )
}

export default SherchUser
