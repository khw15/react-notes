/* eslint-disable max-len */
let notes = [
  {
    id: 'notes-1',
    title: 'Babel',
    body: '<b>Babel</b> merupakan <i>tools open-source</i> yang digunakan untuk mengubah sintaks <a href="https://en.wikipedia.org/wiki/ECMAScript">ECMAScript</a> 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false
  },
  {
    id: 'notes-2',
    title: 'Functional Component',
    body: 'Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false
  },
  {
    id: 'notes-3',
    title: 'Modularization',
    body: 'Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false
  },
  {
    id: 'notes-4',
    title: 'Lifecycle',
    body: 'Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false
  },
  {
    id: 'notes-5',
    title: 'ESM',
    body: 'ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false
  },
  {
    id: 'notes-6',
    title: 'Module Bundler',
    body: 'Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false
  },
  {
    'id': 'notes-7',
    'title': 'Data Structures',
    'body': 'Data structures are essential components in computer science and software development. They allow us to organize and store data efficiently.',
    'createdAt': '2023-03-20T10:15:45.123Z',
    'archived': true
  },
  {
    'id': 'notes-8',
    'title': 'Data Analysis Techniques',
    'body': 'Data analysis techniques refer to the methods and processes used to inspect, clean, transform, and interpret data to discover valuable insights and make informed decisions. These techniques are crucial in various fields, including business, science, and research.',
    'createdAt': '2023-01-20T12:45:18.123Z',
    'archived': true
  },
  {
    'id': 'notes-9',
    'title': 'Randomly Generated Note',
    'body': 'This is some random content for the note. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'createdAt': '2023-10-15T12:00:00.000Z',
    'archived': true
  }
]

function getAllNotes() {
  return notes
}

function getNote(id) {
  const foundedNote = notes.find((note) => note.id === id)
  return foundedNote
}

function getActiveNotes() {
  const activeNotes = notes.filter((note) => !note.archived)
  return activeNotes
}

function getArchivedNotes() {
  const archivedNotes = notes.filter((note) => note.archived)
  return archivedNotes
}

function addNote({title, body}) {
  notes = [...notes, {
    id: `notes-${+new Date()}`, title: title || '(untitled)', body, createdAt: new Date().toISOString(), archived: false
  }]
}

function deleteNote(id) {
  notes = notes.filter((note) => note.id !== id)
}

function archiveNote(id) {
  notes = notes.map((note) => {
    if (note.id === id) {
      return {...note, archived: true}
    }
    return note
  })
}

function unarchiveNote(id) {
  notes = notes.map((note) => {
    if (note.id === id) {
      return {...note, archived: false}
    }

    return note
  })
}

function editNote({id, title, body}) {
  const noteToEdit = notes.find((note) => note.id === id)
  noteToEdit.title = title
  noteToEdit.body = body

  notes = notes.map((note) => {
    if (note.id === id) {
      return note
    }
    return note
  })
}

export {
  getAllNotes,
  getActiveNotes,
  getArchivedNotes,
  deleteNote,
  editNote,
  getNote,
  archiveNote,
  unarchiveNote,
  addNote
}
