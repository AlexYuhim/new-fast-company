import React, { useEffect, useState } from 'react'
import TextField from '../common/form/textField'
import { validator } from '../../utils/validator'
import CheckBoxField from '../common/form/checkBoxField'
const LoginForm = () => {
  const [errors, setErrors] = useState({})
  const [data, setData] = useState({ email: '', password: '', stayOn: false }) // Универсалоное состояние для всех полей
  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value })) // если мы вызываем функцию через колбаек , то мы можем получить предыдуще состояние state
    /**
     * Получаем старое значение state изменяем значение в вполе в котором идет ввод
     */
  }
  /** создаем конфигурация валидатора */
  const validatoConfig = {
    email: {
      isRequired: { message: 'Электронаая почта обязательна для заполнения' },
      isEmail: { message: 'Email введен не коректно' },
    },
    password: {
      isRequired: { message: ' Поле пароль обязательно для заполнения' },
      isCapitalSymbol: {
        message: ' пароль должен содержать минимум одну заглавную букву',
      },
      isContainDigit: {
        message: ' пароль должен содержать минимум одну цифру',
      },
      min: { message: 'Пароль дожен состоять минимум из 8 символов', value: 8 },
    },
  }

  useEffect(() => {
    validate()
  }, [data])
  // в методе validate задаем условия валидности
  const validate = () => {
    const errors = validator(data, validatoConfig)
    // for (const fieldName in data) {
    //   if (data[fieldName].trim() === '') {
    //     errors[fieldName] = `${fieldName} обязательно для заполнения`
    //   }
    // }
    setErrors(errors)
    return Object.keys(errors).length === 0 // если количество ошибок = 0  то ничего не возврящаем
  }
  const isValid = Object.keys(errors).length === 0 // переменная для октивности кнопки отправить

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
      <TextField
        label="Эkектронная почта"
        name="email"
        value={data.email}
        onChange={handleChange}
        error={errors.email}
      />
      <TextField
        label="Пароль"
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
        error={errors.password}
      />
      <CheckBoxField value={data.stayOn} onChange={handleChange} name="stayOn">
        Подтвердите <a>лицензионное соглашение</a>
      </CheckBoxField>
      <button
        type="submit"
        disabled={!isValid}
        className="btn bg-primary w-100 mx-auto mt-2"
      >
        Submit
      </button>
    </form>
  )
}

export default LoginForm
