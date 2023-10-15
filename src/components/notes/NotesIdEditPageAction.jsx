import React from 'react'
import PropTypes from 'prop-types'
import {HiCheck} from 'react-icons/hi'
import PageAction from '../layout/PageAction'
import Swal from 'sweetalert2'

function NotesIdEditPageAction({handleSave}) {
  const showToast = (message, icon, position) => {
    Swal.mixin({
      toast: true,
      position: position,
      showConfirmButton: false,
      timer: 3000
    }).fire({
      icon: icon,
      title: message
    })
  }

  const confirmSave = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You are about to save this note.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, save it',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#d33',
      customClass: {
        confirmButton: 'swal-confirm-button',
        cancelButton: 'swal-cancel-button'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        handleSave()
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        showToast('Note save canceled', 'info', 'bottom-start')
      }
    })
  }

  return (
    <PageAction page="detail-page">
      <button
        className="action"
        type="button"
        title="Save"
        onClick={confirmSave}
      >
        <HiCheck />
      </button>
    </PageAction>
  )
}

NotesIdEditPageAction.propTypes = {
  handleSave: PropTypes.func.isRequired
}

export default NotesIdEditPageAction
