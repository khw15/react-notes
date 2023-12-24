import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import useInput from '../hooks/useInput'
import useLanguage from '../hooks/useLanguage'
import {register} from '../utils/network-data'

export default function RegisterPage() {
  const [name, onNameChange] = useInput('')
  const [email, onEmailChange] = useInput('')
  const [password, onPasswordChange] = useInput('')
  const [confirmPassword, onConfirmPasswordChange] = useInput('')

  const navigate = useNavigate()

  const textApp = useLanguage('app')
  const textRegister = useLanguage('register')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert('Konfirmasi password tidak sesuai')
    }

    register({name, email, password})
        .then((res) => {
          if (!res.error) {
            alert(textRegister.msg.registerSuccess)
            navigate('/login')
          }
        })
        .catch(() => {
          alert(textApp.msg.error)
        })
  }

  return (
    <section className="register-page">
      <h2>{ textRegister.header }</h2>
      <form className="input-register" onSubmit={handleSubmit}>
        <label htmlFor="name">{ textRegister.name }</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onNameChange}
          minLength="6"
          maxLength="255"
          required
        />
        <label htmlFor="email">{ textRegister.email }</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={onEmailChange}
          minLength="6"
          maxLength="255"
          required
        />
        <label htmlFor="password">{ textRegister.password }</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={onPasswordChange}
          minLength="6"
          maxLength="255"
          required
        />
        <label htmlFor="confirmPassword">{ textRegister.confirm }</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={onConfirmPasswordChange}
          minLength="6"
          maxLength="255"
          required
        />
        <button type="submit">{ textRegister.register }</button>
      </form>
      <p className="register-page__footer">
        { textRegister.footer }
        {' '}
        <Link to="/login">{ textRegister.footerLoginLink }</Link>
      </p>
    </section>
  )
}
