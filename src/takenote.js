import React, { Component, Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const styles = {
  TakeNote: {
    padding:'10px'
  },
  button: {
    margin:'10px'
  }
};

export default class TakeNote extends Component  {
  constructor ( props ) {
    super( props );
    this.state = {
      expanded:false,
      note:'',
      title:'',
      disabled: true
    }
  }

  static get propTypes() {
    return {
      onNew: PropTypes.func.isRequired
    }
  }

  handleExpanded(event) {
    this.setState({expanded:true})
  }
  handleNoteChange(event){
    this.setState({note: event.target.value})
  }
  handleTtileChange(event){
    this.setState({title: event.target.value})
    this.setState({disabled:false})
  }

  handleNewNote(event) {
    if (this.state.title) {
      let obj = {
        id:  this.props.notes.length + 1,
        title: this.state.title,
        description: this.state.note
      }
      this.props.onNew(obj);
      this.setState({
        title: '',
        note:''
      });
      this.setState({expanded:false})
      this.setState({disabled:true})
    } else {
      this.setState({disabled:true})
    }
  }

  handleNoteClose() {
    this.setState({expanded: false})
  }

  render() {
    return (
      <div>
        <Paper style={styles.TakeNote}>
          {this.state.expanded ? <TextField
              id="title"
              label="Title"
              margin="normal"
              value={this.state.title}
              fullWidth={true}
              autoComplete= 'off'
              onChange={this.handleTtileChange.bind(this)}
            />: null}
            <TextField
              id="notes"
              label="Notes"
              margin="normal"
              required={true}
              value={this.state.note}
              fullWidth={true}
              multiline={true}
              onChange={this.handleNoteChange.bind(this)}
              onClick={this.handleExpanded.bind(this)}
            />
             {this.state.expanded ?
             <Fragment><Button color="primary" disabled={this.state.disabled} variant="contained" style={styles.button} onClick={this.handleNewNote.bind(this)} >Save</Button>
             <Button variant="contained" style={styles.button} color="secondary" onClick={this.handleNoteClose.bind(this)}>Close</Button>
             </Fragment>: null }
        </Paper>
      </div>
    );
  }  
}
