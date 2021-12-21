import React from 'react'

const Favorites = (props) => {
  return (
    <button
      onClick={() => {
        props.onhendelFavoritClik(props.id, props.bookmark)
      }}
    >
      <i
        style={{ fontSize: '20px' }}
        key={props.id}
        className={`${
          props.bookmark !== true
            ? 'bi bi-hand-thumbs-up'
            : 'bi bi-hand-thumbs-down-fill'
        }`}
      />
    </button>
  )
}
export default Favorites
