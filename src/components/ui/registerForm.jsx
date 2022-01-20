import React, { useEffect, useState } from 'react'
import TextFild from '../common/form/textField'
import { validator } from '../../utils/validator'
import api from '../../api'
import SelectField from '../common/form/selectField'
import RadioFild from '../common/form/radioField'
import MultiSelectField from '../common/form/multiSelectField'
import CheckBoxField from '../common/form/checkBoxField'

const RegistForm = () => {
  const [errors, setErrors] = useState({})
  const [qualities, setQualities] = useState({})
  const [profession, setProfession] = useState([]) //  состояние для всех професий для поля select
  const [data, setData] = useState({
    email: '',
    password: '',
    profession: '',
    sex: 'Male',
    qualities: [],
    licence: false,
  }) // Универсалоное состояние для всех полей
  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
    // если мы вызываем функцию через колбаек , то мы можем получить предыдуще состояние state
    /**
     * Получаем старое значение state изменяем значение в вполе в котором идет ввод
     */
  }
  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfession(data))
    api.qualities.fetchAll().then((data) => setQualities(data))
  }, [])
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
    profession: {
      isRequired: { message: 'Выбирите Вашу профессию' },
    },
    licence: {
      isRequired: { message: 'вы не можете войти в систему без лицензии' },
    },
  }

  useEffect(() => {
    validate()
  }, [data])

  const validate = () => {
    const errors = validator(data, validatoConfig)

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
   *
   * <option selected disabled value="">  = selected зоначает, что он выбран в текущий момент по умолчанию
   * disabled = означает, что если мы выберем какоет другое значение, то данный option не будет доступен
   * но мы можем задаеть его по умолчанию
   * value="" значение которое мы будем передавать
   *
   *
   *
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
      <SelectField
        defaultOption=" Choose..."
        label="Введите професию"
        name="profession"
        value={data.profession}
        onChange={handleChange}
        options={profession}
        error={errors.profession}
      />
      <RadioFild
        options={[
          { name: 'Male', value: 'Male' },
          { name: 'Female', value: 'Female' },
        ]}
        value={data.sex}
        name="sex"
        onChange={handleChange}
        label="выбирbте ваш пол"
      />
      <MultiSelectField
        options={qualities}
        onChange={handleChange}
        defaultValue={data.qualities}
        name="qualities"
        label="выбирbте ваши качества"
      />
      <CheckBoxField
        value={data.licence}
        onChange={handleChange}
        name="licence"
        error={errors.licence}
      >
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

export default RegistForm
