import React, { useState, useEffect } from 'react'
import TextFild from './textFild'
import { validstor } from '../utils/validator'
const Login = () => {
  const [errors, setErrors] = useState({})
  const [data, setData] = useState({ email: '', password: '' }) // Универсалоное состояние для всех полей
  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value })) // если мы вызываем функцию через колбаек , то мы можем получить предыдуще состояние state
    /**
     * Получаем старое значение state изменяем значение в вполе в котором идет ввод
     */
  }
  /** создаем конфигурация валидатора */
  const validatoConfig = {
    email: {
      isRequired: { message: 'Электронаая почта обязательна для заполнения' },
    },
    password: {
      isRequired: { message: ' Поле пароль обязательно для заполнения' },
    },
  }

  useEffect(() => {
    validate()
  }, [data])
  // в методе validate задаем условия валидности
  const validate = () => {
    const errors = validstor(data, validatoConfig)
    // for (const fieldName in data) {
    //   if (data[fieldName].trim() === '') {
    //     errors[fieldName] = `${fieldName} обязательно для заполнения`
    //   }
    // }
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
        error={errors.email}
      />
      <TextFild
        label="Пароль"
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
        error={errors.password}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Login
