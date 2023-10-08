import React, {useState} from 'react';
import {toast} from 'react-toastify';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

const toastId1 = 'toast-1';
const toastId2 = 'toast-2';
const toastId3 = 'toast-3';

const NotesInput = ({addNewNote, closeModal}) => {
  const [formData, setFormData] = useState({
    title: '',
    noteBody: '',
    noteBodyLength: 0,
  });

  const onTitleChange = (event) => {
    const title = event.target.value;
    if (title.length <= 50) {
      setFormData({
        ...formData,
        title,
        noteBodyLength: title.length,
      });
    } else {
      toast.error('Max length for note body is 50', {toastId: toastId1});
    }
  };

  const onBodyChange = (event) => {
    const noteBody = event.target.value;
    setFormData({
      ...formData,
      noteBody,
    });
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (formData.title === '') {
      toast.error('Title cannot be empty!', {toastId: toastId2});
    } else if (formData.noteBody === '') {
      toast.error('Note body cannot be empty!', {toastId: toastId3});
    } else {
      const newData = {
        id: +new Date(),
        title: formData.title,
        body: formData.noteBody,
        archived: false,
        createdAt: new Date(),
      };
      const result = addNewNote(newData);
      if (!result.error) {
        toast.success('New note saved!');
        setFormData({
          ...formData,
          title: '',
          noteBody: '',
          noteBodyLength: 0,
        });
        closeModal();
      } else {
        toast.error('New note failed to save!');
      }
    }
  };

  return (
    <div className="note-input">
      <i className="note-input__close-button" onClick={closeModal}>
        <FontAwesomeIcon icon={faTimes} />
      </i>
      <h2 className="note-input__title">Take Note</h2>
      <form onSubmit={onSubmitForm}>
        <h3>Title</h3>
        <input
          className="note-input__title"
          type="text"
          name="title"
          placeholder="Title"
          required
          value={formData.title}
          onChange={onTitleChange}
        />
        <p className="note-input__char-limit">
            Characters left: {50 - formData.noteBodyLength}</p>
        <h3>Notes</h3>
        <textarea
          className="note-input__body"
          name="noteBody"
          placeholder="Your notes here ..."
          required
          value={formData.noteBody}
          onChange={onBodyChange}
          maxLength={500} // Example maxLength
        ></textarea>
        <button type="submit">Add note</button>
      </form>
    </div>
  );
};

export default NotesInput;
