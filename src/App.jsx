import React, {useEffect, useMemo, useState} from 'react'
import Routes from './routes'
import LocaleContext from './contexts/LocaleContext'
import AuthContext from './contexts/AuthContext'
import {getUserLogged} from './utils/network-data'
import LoadingIndicator from './components/layout/LoadingIndicator'
import HeaderComponent from './components/layout/HeaderComponent'
import ThemeContext from './contexts/ThemeContext'
import useTheme from './hooks/useTheme'
import Cookies from 'js-cookie'

function App() {
  const [auth, setAuth] = useState(null)
  const [locale, setLocale] = useState('id')
  const [theme, changeTheme] = useTheme()
  const [loading, setLoading] = useState(true)

  const toggleLocale = () => {
    let newLocale

    switch (locale) {
      case 'id':
        newLocale = 'en'
        break
      case 'en':
        newLocale = 'ko' // Toggle to Korean
        break
      case 'ko':
        newLocale = 'ja' // Toggle back to Indonesian
        break
      case 'ja':
        newLocale = 'id' // Toggle back to English
        break
      default:
        newLocale = 'en'
    }

    Cookies.set('locale', newLocale)
    setLocale(newLocale)
  }

  const localeContextValue = useMemo(() => ({locale, toggleLocale}), [locale])

  const authContextValue = useMemo(() => ({auth, setAuth}), [auth])

  const themeContextValue = useMemo(() => ({theme, changeTheme}), [auth])

  useEffect(() => {
    getUserLogged()
        .then((res) => {
          if (!res.error) {
            setAuth(res.data)
          } else {
            setAuth(null)
          }
          setLoading(false)
        })
        .catch(() => {
          alert('Error')
        })

    const storedLocale = Cookies.get('locale')
    if (storedLocale && ['id', 'en', 'ko', 'ja'].includes(storedLocale)) {
      setLocale(storedLocale)
    }

    const storedTheme = Cookies.get('theme')
    if (storedTheme) {
      changeTheme(storedTheme)
    } else {
      Cookies.set('theme', 'dark')
      changeTheme('dark')
    }
  }, [])

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <LocaleContext.Provider value={localeContextValue}>
        <AuthContext.Provider value={authContextValue}>
          <div className="app-container">
            <HeaderComponent />
            <main>{loading ? <LoadingIndicator /> : <Routes />}</main>
          </div>
        </AuthContext.Provider>
      </LocaleContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
