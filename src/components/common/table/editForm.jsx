import React, { useEffect, useState } from 'react'
import TextFild from '../form/textField'
// import { validator } from '../../../utils/validator'
import api from '../../../api'
import SelectField from '../form/selectField'
import RadioFild from '../form/radioField'
import MultiSelectField from '../form/multiSelectField'
// import CheckBoxField from '../form/checkBoxField'
import { useParams } from 'react-router-dom'

const EditForm = () => {
  const params = useParams() // для получения id
  const [user, setUser] = useState({}) // получаем юзера
  const [qualities, setQualities] = useState({}) //для выбора каxеств
  const [professions, setProfessions] = useState([]) //  для выбора профеcсий

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfessions(data))
    api.qualities.fetchAll().then((data) => setQualities(data))
    api.users.getById(params.userId).then((data) =>
      setUser({
        name: data.name,
        email: data.email,
        profession: data.profession.name,
        qualiti: [data.qualities.map((e) => ({ label: e.name, value: e._id }))],
        sex: data.sex,
      })
    )
  }, [])

  const handleChange = (target) => {
    setUser((prevState) => ({ ...prevState, [target.name]: target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('гыук', e)
  }
  if (user) {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3 p-4 shadow">
            <form onSubmit={handleSubmit}>
              <TextFild
                label="Имя"
                type="name"
                name="name"
                value={user.name}
                onChange={handleChange}
              />
              <TextFild
                label="Эkектронная почта"
                name="email"
                value={user.email}
                onChange={handleChange}
              />

              <SelectField
                defaultOption=" Choose..."
                label="Введите професию"
                name="profession"
                value={user.profession}
                onChange={handleChange}
                options={professions}
              />
              <RadioFild
                options={[
                  { name: 'male', value: 'male' },
                  { name: 'female', value: 'female' },
                ]}
                value={user.sex}
                name="sex"
                onChange={handleChange}
                label="выбирите ваш пол"
              />
              <MultiSelectField
                options={qualities}
                onChange={handleChange}
                defaultValue={user.qualiti || []}
                name="qualities"
                label="выбирите ваши качества"
              />

              <button
                type="submit"
                className="btn bg-primary w-100 mx-auto mt-2"
              >
                Обновить
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  } else {
    return <h3>Loading</h3>
  }
}

export default EditForm
