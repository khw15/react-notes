import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'

function useTheme() {
  // Set the initial theme to either the saved theme or 'dark' as a fallback
  const [theme, setTheme] = useState(() => {
    const savedTheme = Cookies.get('theme')
    return savedTheme || 'dark'
  })

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  const changeTheme = (val) => {
    setTheme(val)
    applyTheme(val)
    Cookies.set('theme', val, {expires: 365})
  }

  const applyTheme = (val) => {
    const root = window.document.documentElement
    root.setAttribute('data-theme', val)
  }

  return [theme, changeTheme]
}

export default useTheme
