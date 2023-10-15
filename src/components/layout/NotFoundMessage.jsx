import React from 'react'

export default function NotFoundMessage() {
  return (
    <div style={styles.container}>
      <span role="img" aria-label="Sad Emoji" style={styles.emoji}>
        😢😢😢
      </span>
      <h1 style={styles.header}>404</h1>
      <p style={styles.paragraph}>Oops! Page not found</p>
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
