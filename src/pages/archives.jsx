import React, {useEffect, useState} from 'react'
import HomepageAction from '../components/index/HomePageAction'
import LoadingIndicator from '../components/layout/LoadingIndicator'
import NoteListEmpty from '../components/notes/NoteListEmpty'
import NotesList from '../components/notes/NotesList'
import useInput from '../hooks/useInput'
import useLanguage from '../hooks/useLanguage'
import {getArchivedNotes} from '../utils/network-data'

const ArchivesPage = () => {
  const [dataNotes, setDataNotes] = useState([])
  const [initNotes, setInitNotes] = useState(false)
  const [loading, setLoading] = useState(true)
  const [notes, setNotes] = useState([])
  const [search, setSearch] = useInput('')
  const text = useLanguage('archive')
  const textNote = useLanguage('note')

  const initNotesFromApi = async () => {
    try {
      const res = await getArchivedNotes()
      if (!res.error) {
        setDataNotes(res.data)
        setNotes(res.data)
        setInitNotes(true)
        setLoading(false)
      }
    } catch (error) {
      console.error('Error fetching archived notes:', error)
      // Handle error (e.g., show a user-friendly error message)
    }
  }

  useEffect(() => {
    if (!initNotes) {
      initNotesFromApi()
    }

    if (initNotes) {
      const filteredNotes = search ?
        // eslint-disable-next-line max-len
        dataNotes.filter((note) => note.title.toLowerCase().includes(search.toLowerCase())) :
        [...dataNotes]
      setNotes(filteredNotes)
    }
  }, [search, initNotes])

  return (
    <section className="homepage">
      <h2>{text.header}</h2>
      <section className="search-bar">
        <input
          type="text"
          placeholder={textNote.searchPlaceholder}
          value={search}
          onChange={setSearch}
        />
      </section>
      {notes.length > 0 && !loading && <NotesList notes={notes} />}
      {notes.length === 0 && !loading && <NoteListEmpty />}
      {loading && <LoadingIndicator />}
      <HomepageAction />
    </section>
  )
}

export default ArchivesPage
