/* eslint-disable max-len */
import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import useInput from '../hooks/useInput'
import useLanguage from '../hooks/useLanguage'
import {register} from '../utils/network-data'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const RegisterPage = () => {
  const [name, onNameChange] = useInput('')
  const [email, onEmailChange] = useInput('')
  const [password, onPasswordChange] = useInput('')
  const [confirmPassword, onConfirmPasswordChange] = useInput('')

  const navigate = useNavigate()

  const textApp = useLanguage('app')
  const textRegister = useLanguage('register')

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      MySwal.fire({
        icon: 'error',
        title: textRegister.msg.confirmPasswordMismatch
      })
      return
    }

    try {
      setLoading(true)

      await new Promise((resolve) => setTimeout(resolve, 1500))

      const registerResponse = await register({name, email, password})

      if (!registerResponse.error) {
        MySwal.fire({
          icon: 'success',
          allowOutsideClick: false,
          title: textRegister.msg.registerSuccess
        }).then(() => {
          navigate('/login')
        })
      }
    } catch (error) {
      console.error('Error during registration:', error)
      MySwal.fire({
        icon: 'error',
        title: textApp.msg.error
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="register-page">
      <h2>{textRegister.header}</h2>
      <form className="input-register" onSubmit={handleSubmit}>
        <label htmlFor="name">{textRegister.name}</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onNameChange}
          minLength="6"
          maxLength="255"
          required
        />
        <label htmlFor="email">{textRegister.email}</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={onEmailChange}
          minLength="6"
          maxLength="255"
          required
        />
        <label htmlFor="password">{textRegister.password}</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={onPasswordChange}
          minLength="6"
          maxLength="255"
          required
        />
        <label htmlFor="confirmPassword">{textRegister.confirm}</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={onConfirmPasswordChange}
          minLength="6"
          maxLength="255"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? textRegister.loading : textRegister.register}
        </button>
      </form>
      <p className="register-page__footer">
        {textRegister.footer} <Link to="/login">{textRegister.footerLoginLink}</Link>
      </p>
    </section>
  )
}

export default RegisterPage
