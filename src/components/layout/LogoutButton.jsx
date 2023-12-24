import React, {useContext} from 'react'
import {MdLogout} from 'react-icons/md'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import AuthContext from '../../contexts/AuthContext'
import useLanguage from '../../hooks/useLanguage'
import Cookies from 'js-cookie'

const MySwal = withReactContent(Swal)

export default function LogoutButton() {
  const {auth} = useContext(AuthContext)
  const text = useLanguage('app')

  const handleLogout = () => {
    MySwal.fire({
      title: text.msg.confirm,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      allowOutsideClick: false,
      confirmButtonText: text.msg.yes,
      cancelButtonText: text.msg.no
    }).then((result) => {
      if (result.isConfirmed) {
        Cookies.remove('accessToken')
        window.location = '/'
      }
    })
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
