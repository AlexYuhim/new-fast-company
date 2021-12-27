// import React from 'react'
// import DeleteUser from './deleteUser'
// import Favorites from './favorites'
// import Qualities from './qualities'
// import 'bootstrap-icons/font/bootstrap-icons.css'
// const User = ({
//   _id,
//   name,
//   profession,
//   qualities,
//   completedMeetings,
//   rate,
//   bookmark,
//   onHandleDeleteUser,
//   onHandleFavoritClik,
// }) => {
//   return (
//     <tr>
//       <td>{name}</td>
//       <td>{profession.name}</td>
//       <td>
//         {qualities.map((item) => (
//           <Qualities key={item._id} {...item} />
//         ))}
//       </td>
//       <td>{completedMeetings}</td>
//       <td>{rate}/5</td>
//       <td>
//         <Favorites
//           id={_id}
//           onHandleFavoritClik={onHandleFavoritClik}
//           bookmark={bookmark}
//         />
//       </td>
//       <td>
//         <DeleteUser id={_id} onHandleDeleteUser={onHandleDeleteUser} />
//       </td>
//     </tr>
//   )
// }
// export default User
