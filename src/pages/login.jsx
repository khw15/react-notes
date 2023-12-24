/* eslint-disable max-len */
import React, {useContext, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import AuthContext from '../contexts/AuthContext'
import useInput from '../hooks/useInput'
import useLanguage from '../hooks/useLanguage'
import {getUserLogged, login, putAccessToken} from '../utils/network-data'

const LoginPage = () => {
  const {setAuth} = useContext(AuthContext)
  const [email, onEmailChange] = useInput('')
  const [password, onPasswordChange] = useInput('')
  const navigate = useNavigate()
  const textLogin = useLanguage('login')

  const [loading, setLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      setLoading(true) // Set loading to true when starting the login process

      // Simulate a delay for demonstration purposes (replace with your actual login logic)
      await new Promise((resolve) => setTimeout(resolve, 1500))

      const loginResponse = await login({email, password})

      if (!loginResponse.error) {
        putAccessToken(loginResponse.data.accessToken)

        const userLoggedResponse = await getUserLogged()

        if (!userLoggedResponse.error) {
          setAuth(userLoggedResponse.data)
        } else {
          setAuth(null)
        }

        navigate('/')
      }
    } catch (error) {
      console.error('Error during login:', error)
      // Handle error (e.g., show a user-friendly error message)
    } finally {
      setLoading(false) // Set loading to false when login process completes
    }
  }

  return (
    <section className="login-page">
      <h2>{textLogin.header}</h2>
      <form className="input-login" onSubmit={handleLogin}>
        <label htmlFor="email">{textLogin.email}</label>
        <input
          type="email"
          id="email"
          value={email}
          minLength="6"
          maxLength="255"
          onChange={onEmailChange}
          required
        />
        <label htmlFor="password">{textLogin.password}</label>
        <input
          type="password"
          id="password"
          value={password}
          minLength="6"
          maxLength="255"
          onChange={onPasswordChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? textLogin.loading : textLogin.login}
        </button>
      </form>
      <p className="login-page__footer">
        {textLogin.footer} <Link to="/register">{textLogin.footerRegisterLink}</Link>
      </p>
    </section>
  )
}

export default LoginPage
