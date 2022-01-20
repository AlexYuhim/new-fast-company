import React, { useState, useEffect } from 'react'
import GroupList from '../components/common/grupList'
import FormatMessage from '../components/ui/message'
import Pagination from '../components/common/pagination'
import api from '../api'

import UserTable from '../components/common/table/userTable'
import _ from 'lodash'

import SherchUser from '../components/common/table/formSherch'
import { paginate } from '../utils/pagination'

const Users = () => {
  const pageSize = 8
  const [sherсhUsers, setSherсhUsers] = useState('') //  хук для поиска подстроки в именах пользовотелей
  const [corentPage, setCorentPage] = useState(1)
  const [profession, setProfession] = useState()
  const [selectedProff, setSelectedProff] = useState()
  const [sortBy, setSortBy] = useState({ iter: 'name', order: 'asc' })
  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfession(data))
  }, [])
  useEffect(() => {
    setCorentPage(1)
  }, [selectedProff, sherсhUsers]) // отслеживаем изменение в дом

  const [users, setUsers] = useState()
  useEffect(() => {
    api.users.fetchAll().then((data) => setUsers(data))
  }, [])

  const handleShershUser = ({ target }) => {
    setSelectedProff() // при каждом срабатывании обновляем selectedProff для возможности сортировки при выбранной профессии
    console.log('target', target.value)
    setSherсhUsers(target.value)
  }
  const handleFavoritClik = (id, stat) => {
    const status = users.map((event) => {
      if (event._id === id) {
        if (!stat) {
          return { ...event, bookmark: true }
        } else {
          return {
            ...event,
            bookmark: false,
          }
        }
      }
      return event
    })
    setUsers(status)
  }

  const handleDeleteUser = (id) => {
    return setUsers(users.filter((e) => e._id !== id))
  }

  const handelSort = (items) => {
    setSortBy(items)
  }
  const handleProfessionSelect = (item) => {
    setSherсhUsers() //
    setSelectedProff(item)
  }
  const handlePageChange = (pageIndex) => {
    setCorentPage(pageIndex)
  }

  const clearFilter = () => {
    setSelectedProff() // я устал, уже 3 часа ночи я пошел спать
    setSherсhUsers()
  }

  if (users) {
    const filterUseer = selectedProff
      ? users.filter((user) => user.profession._id === selectedProff)
      : sherсhUsers
      ? users.filter(
          (user) => user.name.toLowerCase().includes(sherсhUsers.toLowerCase()) //осуществляем поиск подстроки
        )
      : users

    const counter = filterUseer.length

    const userSort = _.orderBy(filterUseer, [sortBy.path], [sortBy.order])
    const userCrop = paginate(userSort, corentPage, pageSize)

    if (users.length === 0 && counter === 0) {
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
          <SherchUser
            sherсh={sherсhUsers}
            onhandleShershUser={handleShershUser}
          />
          <UserTable
            selectedSort={sortBy}
            onSort={handelSort}
            onHandleDeleteUser={handleDeleteUser}
            onHandleFavoritClik={handleFavoritClik}
            users={userCrop}
          />
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
  return 'loading....'
}
export default Users
