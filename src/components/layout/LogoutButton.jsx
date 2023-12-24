import React, {useContext} from 'react'
import {MdLogout} from 'react-icons/md'
import AuthContext from '../../contexts/AuthContext'
import useLanguage from '../../hooks/useLanguage'
import Cookies from 'js-cookie'

export default function LogoutButton() {
  const {auth} = useContext(AuthContext)
  const text = useLanguage('app')

  const handleLogout = () => {
    if (confirm(text.msg.confirm)) {
      Cookies.remove('accessToken')
      window.location = '/'
    }
  }

  return (
    <>
      {auth ? (
        <button
          type="button"
          title="Logout"
          className="button-logout"
          onClick={handleLogout}
        >
          <MdLogout />
        </button>
      ) : (
        ''
      )}
    </>
  )
}
