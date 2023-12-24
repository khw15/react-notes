import Cookies from 'js-cookie'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const BASE_URL = 'https://notes-api.dicoding.dev/v1'

const MySwal = withReactContent(Swal)

function getAccessToken() {
  return Cookies.get('accessToken')
}

function putAccessToken(accessToken) {
  Cookies.set('accessToken', accessToken, {expires: 7})
}

async function fetchWithToken(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`
    }
  })
}

async function login({email, password}) {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })

  const responseJson = await response.json()

  if (responseJson.status !== 'success') {
    MySwal.fire({
      icon: 'error',
      title: 'Oops...',
      text: responseJson.message
    })

    return {error: true, data: null}
  }

  return {error: false, data: responseJson.data}
}

async function register({name, email, password}) {
  const response = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, email, password})
  })

  const responseJson = await response.json()

  if (responseJson.status !== 'success') {
    MySwal.fire({
      icon: 'error',
      title: 'Oops...',
      text: responseJson.message
    })

    return {error: true}
  }

  return {error: false}
}

async function getUserLogged() {
  const response = await fetchWithToken(`${BASE_URL}/users/me`)
  const responseJson = await response.json()

  if (responseJson.status !== 'success') {
    return {error: true, data: null}
  }

  return {error: false, data: responseJson.data}
}

async function addNote({title, body}) {
  const response = await fetchWithToken(`${BASE_URL}/notes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({title, body})
  })

  const responseJson = await response.json()

  if (responseJson.status !== 'success') {
    return {error: true, data: null}
  }

  return {error: false, data: responseJson.data}
}

async function getActiveNotes() {
  const response = await fetchWithToken(`${BASE_URL}/notes`)
  const responseJson = await response.json()

  if (responseJson.status !== 'success') {
    return {error: true, data: null}
  }

  return {error: false, data: responseJson.data}
}

async function getArchivedNotes() {
  const response = await fetchWithToken(`${BASE_URL}/notes/archived`)
  const responseJson = await response.json()

  if (responseJson.status !== 'success') {
    return {error: true, data: null}
  }

  return {error: false, data: responseJson.data}
}

async function getNote(id) {
  const response = await fetchWithToken(`${BASE_URL}/notes/${id}`)
  const responseJson = await response.json()

  if (responseJson.status !== 'success') {
    return {error: true, data: null}
  }

  return {error: false, data: responseJson.data}
}

async function archiveNote(id) {
  const response = await fetchWithToken(`${BASE_URL}/notes/${id}/archive`, {
    method: 'POST'
  })

  const responseJson = await response.json()

  if (responseJson.status !== 'success') {
    return {error: true, data: null}
  }

  return {error: false, data: responseJson.data}
}

async function unarchiveNote(id) {
  const response = await fetchWithToken(`${BASE_URL}/notes/${id}/unarchive`, {
    method: 'POST'
  })

  const responseJson = await response.json()

  if (responseJson.status !== 'success') {
    return {error: true, data: null}
  }

  return {error: false, data: responseJson.data}
}

async function deleteNote(id) {
  const response = await fetchWithToken(`${BASE_URL}/notes/${id}`, {
    method: 'DELETE'
  })

  const responseJson = await response.json()

  if (responseJson.status !== 'success') {
    return {error: true, data: null}
  }

  return {error: false, data: responseJson.data}
}

export {
  getAccessToken,
  putAccessToken,
  login,
  register,
  getUserLogged,
  addNote,
  getActiveNotes,
  getArchivedNotes,
  getNote,
  archiveNote,
  unarchiveNote,
  deleteNote
}
