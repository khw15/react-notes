import React from 'react';
import {ToastContainer, toast} from 'react-toastify';
import {getInitialData} from '../utils/data';
import Swal from 'sweetalert2';

import AppBody from './Body';
import Header from './Header';
import Footer from './Footer';
import 'react-toastify/dist/ReactToastify.min.css';
import autoBind from 'auto-bind';

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      unfilteredNotes: getInitialData(),
    };

    autoBind(this);
  }

  handleAddNewNote(newNoteData) {
    try {
      this.setState((prevState) => {
        return {
          notes: [newNoteData, ...prevState.notes],
          unfilteredNotes: [newNoteData, ...prevState.unfilteredNotes],
        };
      });
      return {
        error: false,
        message: 'Success!',
      };
    } catch (error) {
      return {
        error: true,
        message: 'Failed!',
      };
    }
  }

  handleNoteDeletion(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      customClass: {
        popup: 'custom-popup',
        confirmButton: 'delete-button',
        cancelButton: 'cancel-button',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        this.setState((prevState) => {
          return {
            notes: prevState.notes.filter((note) => note.id !== id),
            unfilteredNotes: prevState.unfilteredNotes.filter((note) =>
              note.id !== id),
          };
        });
        toast.success('Note deleted!');
      } else {
        toast.error('Deletion cancelled!');
      }
    });
  }

  handleNoteArchive(id) {
    const noteToModify =
    this.state.unfilteredNotes.find((note) => note.id === id);
    const modifiedNote = {...noteToModify, archived: !noteToModify.archived};
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes.filter((note) => note.id !== id),
          modifiedNote,
        ],
        unfilteredNotes: [
          ...prevState.unfilteredNotes.filter((note) => note.id !== id),
          modifiedNote,
        ],
      };
    });
    if (noteToModify.archived) {
      toast.success('Note moved to active!');
    } else {
      toast.success('Note archived!');
    }
  }

  handleNoteSearch(text) {
    if (text.length !== 0 && text.trim() !== '') {
      this.setState({
        notes: this.state.unfilteredNotes.filter((note) =>
          note.title.toLowerCase().includes(text.toLowerCase())),
      });
    } else {
      this.setState({
        notes: this.state.unfilteredNotes,
      });
    }
  }

  render() {
    return (
      <div>
        <Header onSearch={this.handleNoteSearch}/>
        <AppBody
          notes={this.state.notes}
          addNewNote={this.handleAddNewNote}
          onDelete={this.handleNoteDeletion}
          onArchive={this.handleNoteArchive}
        />
        <Footer />
        <ToastContainer
          position="bottom-right"
          autoClose={1500}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}

export default NotesApp;
