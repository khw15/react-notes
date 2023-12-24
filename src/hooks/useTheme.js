import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'

function useTheme() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const savedTheme = Cookies.get('theme')
    if (savedTheme) {
      setTheme(savedTheme)
      applyTheme(savedTheme)
    }
  }, []) // Run only once on mount

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
