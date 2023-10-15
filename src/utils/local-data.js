/* eslint-disable max-len */
let notes = [
  {
    id: 'notes-1',
    title: 'Babel',
    body: '<b>Babel</b> merupakan <i>tools open-source</i> yang digunakan untuk mengubah sintaks <a href="https://en.wikipedia.org/wiki/ECMAScript">ECMAScript</a> 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: true
  },
  {
    id: 'notes-2',
    title: 'Functional Component',
    body: 'Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: true
  },
  {
    id: 'notes-3',
    title: 'Modularization',
    body: 'Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: true
  },
  {
    id: 'notes-4',
    title: 'Lifecycle',
    body: 'Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: true
  },
  {
    id: 'notes-5',
    title: 'ESM',
    body: 'ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: true
  },
  {
    id: 'notes-6',
    title: 'Module Bundler',
    body: 'Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: true
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
  },
  {
    'id': 'notes-10',
    'title': 'Red Bull Racing',
    'body': 'Red Bull Racing is a Formula One racing team, racing a Honda powered car under an Austrian licence and based in the United Kingdom. The team raced under a British licence from 2005 to 2006 and has raced under an Austrian licence since 2007.',
    'createdAt': '2023-10-15T12:00:00.000Z',
    'archived': false
  },
  {
    'id': 'notes-11',
    'title': 'AlpaTauri',
    'body': 'Scuderia AlphaTauri, or simply AlphaTauri, and competing as Scuderia AlphaTauri Honda, is an Italian Formula One racing team and constructor. It is one of two Formula One constructors owned by Austrian beverage company Red Bull, the other being Red Bull Racing. The constructor was rebranded for the 2020 Formula One World Championship from "Toro Rosso" to "AlphaTauri" in order to promote the AlphaTauri fashion brand.',
    'createdAt': '2023-10-15T12:00:00.000Z',
    'archived': false
  },
  {
    'id': 'notes-12',
    'title': 'Scuderia Ferrari',
    'body': 'Scuderia Ferrari S.p.A. is the racing division of luxury Italian auto manufacturer Ferrari and the racing team that competes in Formula One racing. The team is also nicknamed "The Prancing Horse", with reference to their logo. It is the oldest surviving and most successful Formula One team, having competed in every world championship since the 1950 Formula One season.',
    'createdAt': '2023-10-15T12:00:00.000Z',
    'archived': false
  },
  {
    'id': 'notes-13',
    'title': 'Mercedes-AMG Petronas',
    'body': 'Mercedes-AMG Petronas Formula One Team is a British-German Formula One racing team and constructor, based in Brackley, England using a German licence. The team currently competes in the FIA Formula One World Championship as a constructor under the name of Mercedes, with Lewis Hamilton and Valtteri Bottas as the current drivers.',
    'createdAt': '2023-10-15T12:00:00.000Z',
    'archived': false
  },
  {
    'id': 'notes-14',
    'title': 'Alpine F1 Team',
    'body': 'Alpine F1 Team is a French Formula One racing team. The team was founded in 1977 as Equipe Renault Elf, taking its current name in 2021. It is owned by Renault Group, which acquired the team in 2016 and renamed it Renault F1 Team in 2019. Renault will rebrand the team as Alpine F1 Team in 2021, distancing itself from the Renault marque, and using the Alpine name for the first time in Formula One since the 1970s.',
    'createdAt': '2023-10-15T12:00:00.000Z',
    'archived': false
  },
  {
    'id': 'notes-15',
    'title': 'McLaren F1 Team',
    'body': 'McLaren F1 Team is a British Formula One team based in Woking, England, United Kingdom. The team was founded in 1966 by New Zealander Bruce McLaren, who had previously founded McLaren Racing in 1963. The team is identified by the red and white McLaren papaya colour, which was introduced in 1968, and replaced by the red and white McLaren marlboro colour between 1974 and 1996. The team is the second oldest active Formula One team after Ferrari, where they compete as McLaren F1 Team.',
    'createdAt': '2023-10-15T12:00:00.000Z',
    'archived': false
  },
  {
    'id': 'notes-16',
    'title': 'Aston Martin Cognizant',
    'body': 'Aston Martin Cognizant Formula One Team is a British Formula One racing team. The team is based in Silverstone, England, United Kingdom. The team was founded in 2009 by a consortium of businessmen including Canadian Lawrence Stroll, who serves as chairman. The team originally started under the "Racing Point" name, which was rebranded to "Aston Martin" in 2021. The team currently competes under the British licence.',
    'createdAt': '2023-10-15T12:00:00.000Z',
    'archived': false
  },
  {
    'id': 'notes-17',
    'title': 'Williams Racing',
    'body': 'Williams Racing is a British Formula One racing team and constructor. It was founded by team owner Sir Frank Williams and automotive engineer Sir Patrick Head. It is still run by Williams. The team was formed in 1977 after Frank Williams two earlier unsuccessful F1 operations: Frank Williams Racing Cars (1969 to 1975) and Wolf-Williams Racing (1976). All of Williams F1 chassis are called "FW" then a number, the FW being the initials of team owner, Frank Williams.',
    'createdAt': '2023-10-15T12:00:00.000Z',
    'archived': false
  },
  {
    'id': 'notes-18',
    'title': 'Alfa Romeo Racing',
    'body': 'Alfa Romeo Racing is a Swiss Formula One racing team and constructor. It was founded in the 1980s as "Sauber" by Peter Sauber, who progressed through hillclimbing and the World Sportscar Championship to reach Formula One in 1993. Having not won a Grand Prix as an independent, the team was sold to BMW in 2005, and competed as BMW Sauber from 2006 to 2009, scoring one victory. At the end of the 2009 season, however, BMW pulled out of Formula One and the team\'s future remained uncertain for several months, until it was sold back to Peter Sauber and granted a 2010 entry. Sauber has since competed under the name of Alfa Romeo Racing in partnership with the Italian car manufacturer Alfa Romeo, a subsidiary of the Fiat Group.',
    'createdAt': '2023-10-15T12:00:00.000Z',
    'archived': false
  },
  {
    'id': 'notes-19',
    'title': 'Haas F1 Team',
    'body': 'Haas F1 Team is an American licensed Formula One racing team established by NASCAR Cup Series team co-owner Gene Haas in April 2014. The team originally intended to make its début at the start of the 2015 season, but later elected to postpone their entry until the 2016 season. The team is headquartered in Kannapolis, North Carolina – 50 km (31 mi) from Charlotte – alongside sister team and NASCAR entrant Stewart-Haas Racing, though the two teams are separate entities.',
    'createdAt': '2023-10-15T12:00:00.000Z',
    'archived': false
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
