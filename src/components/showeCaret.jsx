import React from 'react'

const ShoweCaret = ({ selectedSort }) => {
  return selectedSort.order === 'asc' ? (
    <i className={'bi bi-caret-up-fill'} />
  ) : (
    <i className={'bi bi-caret-down-fill'} />
  )
}

export default ShoweCaret
