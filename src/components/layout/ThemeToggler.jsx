import React, {useEffect} from 'react'
import {GrSun} from 'react-icons/gr'
import {IoMdMoon} from 'react-icons/io'
import useTheme from '../../hooks/useTheme'

export default function ThemeToggler() {
  const [theme, changeTheme] = useTheme()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <button
      type="button"
      className="toggle-theme"
      onClick={() => changeTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <IoMdMoon /> : <GrSun />}
    </button>
  )
}
