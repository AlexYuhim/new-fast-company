import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import LoginForm from '../components/ui/loginForm'
import RegistForm from '../components/ui/registerForm'

const Login = () => {
  const { type } = useParams() //
  const [formType, setFormType] = useState(type === 'register' ? type : 'login')

  const togleFormType = () => {
    setFormType((prevState) =>
      prevState === 'register' ? 'login' : 'register'
    )
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          {formType === 'register' ? (
            <>
              <h4 className="mb-4"> register </h4>
              <RegistForm />
              <p>
                Alredy have account?
                <a role="button" onClick={togleFormType}>
                  Sign In
                </a>
              </p>
            </>
          ) : (
            <>
              <h4 className="mb-4"> login </h4>
              <LoginForm />
              <p>
                Dont have account?
                <a role="button" onClick={togleFormType}>
                  Sign Up
                </a>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login
