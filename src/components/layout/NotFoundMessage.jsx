import React from 'react'
import useLanguage from '../../hooks/useLanguage'

export default function NotFoundMessage() {
  const text = useLanguage('app')

  return (
    <div style={styles.container}>
      <span role="img" aria-label="Sad Emoji" style={styles.emoji}>
        😢😢😢
      </span>
      <h1 style={styles.header}>404</h1>
      <p style={styles.paragraph}>{ text.pageNotFound }</p>
    </div>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '20vh',
    fontFamily: 'Quicksand, sans-serif',
    color: 'white'
  },
  emoji: {
    fontSize: '3rem'
  },
  header: {
    fontSize: '4rem',
    color: '#FF5733'
  },
  paragraph: {
    fontSize: '1.5rem',
    color: '#FF5733'
  }
}
