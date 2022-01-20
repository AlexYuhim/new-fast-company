import React from 'react'

const Favorites = ({ prop, onHandleFavoritClik, _id, bookmark }) => {
  return (
    <button
      onClick={() => {
        onHandleFavoritClik(_id, bookmark)
      }}
    >
      <i
        style={{ fontSize: '20px' }}
        key={_id}
        className={`${
          bookmark !== true
            ? 'bi bi-hand-thumbs-up'
            : 'bi bi-hand-thumbs-down-fill'
        }`}
      />
    </button>
  )
}
export default Favorites
