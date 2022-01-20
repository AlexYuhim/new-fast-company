import React from 'react'

const Qualities = ({ _id, name, color }) => {
  return <span className={`badge m-2 bg-${color}`}>{name}</span>
}

export default Qualities
