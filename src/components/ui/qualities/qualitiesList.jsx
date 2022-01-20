import React from 'react'
import Qualities from './qualities'

const QualitiesList = ({ qualities }) => {
  return (
    <>
      {qualities.map((item) => (
        <Qualities key={item._id} {...item} />
      ))}
    </>
  )
}

export default QualitiesList
