import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Editor} from 'react-draft-wysiwyg'
import {
  ContentState,
  convertFromHTML,
  EditorState,
  convertToRaw
} from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import AddNewPageAction from '../../components/notes/AddNewPageAction'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import {addNote} from '../../utils/network-data'
import useInput from '../../hooks/useInput'
import useLanguage from '../../hooks/useLanguage'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const NotesNewPages = () => {
  const textApp = useLanguage('app')
  const textNote = useLanguage('notesNew')
  const navigate = useNavigate()

  const [title, setTitle] = useInput('')
  const [body, setBody] = useState(
      EditorState.createWithContent(
          ContentState.createFromBlockArray(
              convertFromHTML(textNote.bodyPlaceholder)
          )
      )
  )

  const onEditorStateChange = (newBody) => {
    setBody(newBody)
  }

  const handleSave = () => {
    const bodyParsed = draftToHtml(convertToRaw(body.getCurrentContent()))

    addNote({title, body: bodyParsed})
        .then((res) => {
          if (!res.error) {
            MySwal.fire({
              icon: 'success',
              title: textNote.addTitle,
              showConfirmButton: false,
              timer: 2500
            }).then(() => navigate('/'))
          }
        })
        .catch(() => {
          MySwal.fire({
            icon: 'error',
            title: textApp.addErrorTitle
          })
        })
  }

  return (
    <section className="add-new-page">
      <div className="add-new-page__input">
        <input
          className="add-new-page__input__title"
          placeholder={textNote.titlePlaceholder}
          value={title}
          onChange={setTitle}
        />
        <Editor
          editorState={body}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChange}
        />
      </div>
      <AddNewPageAction handleSave={handleSave} />
    </section>
  )
}

export default NotesNewPages
