import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TakeNote from './takenote';
import Notes from './notes';
import {Link, Route} from 'react-router-dom';
import Project from './project';
import './App.css';

const styles = {
  appBar: {
    marginBottom:'20px'
  },
  button: {
    color: 'white',
    marginLeft: '20px',
    textDecoration: 'none'
  }
};

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      notes: [
        {
          id: 1,
          title: 'React',
          description: 'Enjoying it!!'
        },
        {
          id: 2,
          title: 'Material UI',
          description: 'Cool Stuff'
        }
      ]
    }
  }

  addNote(note) {
    this.setState({
      notes: [...this.state.notes, note]
    });
  }
  handleDeleteNote(item){
    const deleteUpdateData = this.state.notes.filter(newNotes => newNotes.id !== item.id);
    this.setState({notes: deleteUpdateData});
  }

  render() {
    return (
      <div className="App">

        <AppBar position="static" style={styles.appBar}>
          <Toolbar>
            <IconButton color="inherit">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
            <Link to="/" style={styles.button}>Keep</Link>
            </Typography>
            <Typography variant="title" color="inherit">
              <Link style={styles.button} to="project">Project</Link>
            </Typography>
          </Toolbar>
        </AppBar>
        
        <Grid container item spacing={0} justify="center" >
          <Grid item xs={8}>
              <TakeNote onNew={this.addNote.bind(this)} notes={this.state.notes} />
              <Notes notes={this.state.notes} onDelete={this.handleDeleteNote.bind(this)} />
          </Grid>
        </Grid>
        <Route path="/project" component={Project}/>
      </div>     
    );
  }
}

export default App;
