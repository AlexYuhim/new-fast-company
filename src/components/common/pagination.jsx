import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'

const Pagination = (props) => {
  const { itemsCount, pageSize, onPageChenge, corentPage } = props // инициализация переданных данных
  const pageCount = Math.ceil(itemsCount / pageSize) //округление полученного числа в юольшую сторону
  if (pageCount === 1) return null // если количество страниц равно 1 то не отабражать
  const pages = _.range(1, pageCount + 1) // получаем массив нужной нам длинны
  // отрисовываем нумерацию страниц
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => {
          return (
            <li
              className={'page-item' + (page === corentPage ? ' active' : '')}
              key={'page_' + page}
            >
              <button
                className="page-link "
                onClick={() => {
                  onPageChenge(page)
                }}
              >
                {page}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChenge: PropTypes.func.isRequired,
  corentPage: PropTypes.number.isRequired,
}

export default Pagination
