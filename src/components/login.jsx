import React, { useState, useEffect } from 'react'
import TextFild from './textFild'
const Login = () => {
  const [errors, setErrors] = useState()
  const [data, setData] = useState({ email: '', password: '' }) // Универсалоное состояние для всех полей
  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value })) // если мы вызываем функцию через колбаек , то мы можем получить предыдуще состояние state
    /**
     * Получаем старое значение state изменяем значение в вполе в котором идет ввод
     */
  }
  useEffect(() => {
    validate()
  }, [data])
  // в методе validate задаем условия валидности
  const validate = () => {
    const errors = {}
    for (const fialdName in data) {
      if (data[fialdName].trim() === '') {
        errors[fialdName] = `${fialdName} обязательно для заполнения`
      }
    }
    setErrors(errors)
    return Object.keys(errors).length === 0 // если количество ошибок = 0  то ничего не возврящаем
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate() // при нажатии накнопку Submit проверяем:  если в переменной isValid нет данных то
    if (!isValid) return //  то выводим console.log() иначе ничего не делаем данные невалидны
    console.log('datae', data)
  }
  /** так как все поля нашей формы являются контролируемыми, мы можем передать вводиимые
   * значения с наших полей (data)
   */

  return (
    <form onSubmit={handleSubmit}>
      <TextFild
        label="Эkектронная почта"
        name="email"
        value={data.email}
        onChange={handleChange}
      />
      <TextFild
        label="Пароль"
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Login
