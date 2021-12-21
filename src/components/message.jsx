import React from 'react'
const tus = ' человек тусанёт с тобой сегодня'
const tuss = ' человека тусанут с тобой сегодня'

const FormatMessage = (count) => {
  const lastOne = Number(count.toString().slice(-1))

  if (count > 4 && count <= 15)
    return (
      <span>
        {count} {tus}
      </span>
    )
  if ([2, 3, 4].indexOf(lastOne) >= 0)
    return (
      <span>
        {count} {tuss}
      </span>
    )
  return (
    <span>
      {count} {tus}
    </span>
  )
}
export default FormatMessage
