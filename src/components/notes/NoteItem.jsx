import React from 'react'
import PropTypes from 'prop-types'
import NoteItemTitle from './note-item/NoteItemTitle'
import NoteItemTimestamp from './note-item/NoteItemTimestamp'
import NoteItemBody from './note-item/NoteItemBody'

function NoteItem({note}) {
  return (
    <article className="note-item">
      <NoteItemTitle
        id={note.id}
        title={note.title}
      />
      <NoteItemTimestamp
        timestamp={note.createdAt}
      />
      <NoteItemBody
        body={note.body}
      />
    </article>
  )
}

export const noteItemPropTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired
}
NoteItem.propTypes = noteItemPropTypes

NoteItem.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired
  }).isRequired
}


export default NoteItem
