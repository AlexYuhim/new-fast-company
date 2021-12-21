import React, { useState, useEffect } from 'react'
import GroupList from './grupList'
import FormatMessage from './message'
import Pagination from './pagination'
import api from '../api'
import User from './user'

const Users = (prop) => {
  const pageSize = 4

  const [corentPage, setCorentPage] = useState(1)
  const [profession, setProfession] = useState()
  const [selectedProff, setSelectedProff] = useState()

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfession(data))
  }, [])
  useEffect(() => {
    setCorentPage(1)
  }, [selectedProff])

  const paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize
    return [...items].splice(startIndex, pageSize)
  }

  const filterUseer = selectedProff
    ? prop.users.filter((user) => user.profession._id === selectedProff)
    : prop.users

  const userCrop = paginate(filterUseer, corentPage, pageSize)
  const counter = filterUseer.length

  const handleProfessionSelect = (item) => {
    setSelectedProff(item)
  }
  const handlePageChange = (pageIndex) => {
    setCorentPage(pageIndex)
  }
  const clearFilter = () => {
    setSelectedProff()
  }
  if (prop.users.length === 0 && counter === 0) {
    return <h1 className="badge btn-danger m-2">Никто с тобой не тусанёт</h1>
  } else if (counter === 0) {
    return (
      <>
        <h1 className="badge btn-danger m-2">Никто с тобой не тусанёт</h1>
        <button className="btn bg-primary m-2" onClick={clearFilter}>
          Сбросить фильтр
        </button>
      </>
    )
  }

  return (
    <div className="d-flex">
      <div className="d-flex flex-column flex-shrink-0 p-3">
        {profession && (
          <>
            <GroupList
              selectedItem={selectedProff}
              items={profession}
              onItemsSelected={handleProfessionSelect}
            />
            <button className="btn btn-secondary m-2" onClick={clearFilter}>
              Сбросить фильтр
            </button>
          </>
        )}
      </div>
      <div className="d-flex flex-column">
        <span className="badge m-2 bg-primary">{FormatMessage(counter)}</span>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Профессия</th>
              <th scope="col">Качества</th>
              <th scope="col">количество встреч</th>
              <th scope="col">рейтинг</th>
              <th scope="col">Избранное</th>
              <th cope="col"></th>
            </tr>
          </thead>
          <tbody>
            {userCrop.map((user) => {
              return (
                <User
                  className="d-flex justify-content-center"
                  key={user._id}
                  {...user}
                  {...prop}
                />
              )
            })}
          </tbody>
        </table>
        <div className="d-flex justify-content-center">
          <Pagination
            itemsCount={counter}
            pageSize={pageSize}
            corentPage={corentPage}
            onPageChenge={handlePageChange}
          />
        </div>
      </div>
    </div>
  )
}
export default Users
