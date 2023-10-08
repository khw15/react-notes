import React from 'react';
import {showFormattedDate} from '../utils/data';

const NoteItem = ({note, onDelete, onArchive}) => {
  const handleDelete = () => onDelete(note.id);
  const handleArchive = () => onArchive(note.id);

  const archiveButtonText = note.archived ? 'Unarchive' : 'Archive';

  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{note.title}</h3>
        <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
        <p className="note-item__body">{note.body}</p>
      </div>
      <div className="note-item__action">
        <button
          className="note-item__archive-button"
          onClick={handleArchive}
        >
          {archiveButtonText}
        </button>
        <button className="note-item__delete-button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
