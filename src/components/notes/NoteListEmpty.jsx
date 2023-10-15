import React from 'react'

export default function NoteListEmpty() {
  return (
    <section className="notes-list-empty" style={styles.container}>
      <p className="notes-list__empty" style={styles.text}>
        No notes here.
      </p>
    </section>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '20vh',
    fontFamily: 'Quicksand, Arial, sans-serif',
    color: '#555'
  },
  text: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#FF5733'
  }
}
