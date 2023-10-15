import React from 'react'
import PropTypes from 'prop-types'
import {HiOutlineTrash} from 'react-icons/hi'
import {BiArchiveIn, BiArchiveOut} from 'react-icons/bi'
import {AiOutlineEdit} from 'react-icons/ai'
import PageAction from '../layout/PageAction'
import Swal from 'sweetalert2'

function NotesIdPageAction({
  archived,
  handleEdit,
  handleArchive,
  handleDelete
}) {
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

  const confirmDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You are about to delete this note. This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#d33',
      customClass: {
        confirmButton: 'swal-confirm-button',
        cancelButton: 'swal-cancel-button'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete()
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        showToast('Note deletion canceled', 'info', 'bottom-start')
      }
    })
  }

  const confirmArchive = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You are about to archive this note.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, archive it',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#d33',
      customClass: {
        confirmButton: 'swal-confirm-button',
        cancelButton: 'swal-cancel-button'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        handleArchive()
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        showToast('Archiving canceled', 'info', 'bottom-start')
      }
    })
  }

  return (
    <PageAction page="detail-page">
      <>
        <button
          className="action"
          type="button"
          title="Edit"
          onClick={() => handleEdit()}
        >
          <AiOutlineEdit />
        </button>
        <button
          className="action"
          type="button"
          title={archived ? 'Unarchive' : 'Archive'}
          onClick={confirmArchive}
        >
          {archived ? <BiArchiveOut /> : <BiArchiveIn />}
        </button>
        <button
          className="action"
          type="button"
          title="Delete"
          onClick={confirmDelete}
        >
          <HiOutlineTrash />
        </button>
      </>
    </PageAction>
  )
}

NotesIdPageAction.propTypes = {
  archived: PropTypes.bool.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleArchive: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
}

export default NotesIdPageAction
