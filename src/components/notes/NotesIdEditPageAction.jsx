import React from 'react'
import PropTypes from 'prop-types'
import {HiCheck} from 'react-icons/hi'
import PageAction from '../layout/PageAction'
import Swal from 'sweetalert2'

function NotesIdEditPageAction({handleSave}) {
  const confirmSave = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You are about to save this note.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, save it',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#d33'
    }).then((result) => {
      if (result.isConfirmed) {
        handleSave()
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
