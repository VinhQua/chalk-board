import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput';
import Board from './board';
import { render } from '@testing-library/react';
import  { Component } from 'react';
import NotesList from './NotesList';

class App extends Component {
  state ={
    input:"",
    noteArray:[{id:0,
                content:"asdsa"},
              {id:1,
                content:"asdsd"}]
  }
  componentDidMount(){
    const savedState =JSON.parse(localStorage.getItem("stateString")) || {};
    savedState.input ="";
    this.setState(savedState);
  }
  componentDidUpdate(){
    const stateString = JSON.stringify(this.state);
    localStorage.setItem('stateString',stateString);
  }
  updateBoard = (userInput)=>{
    this.setState({input:userInput})
  }
  deleteNote = (id)=>{
    const curArray = this.state.noteArray;
    const newArray = curArray.filter(note=> note.id !== id);
    this.setState({noteArray:newArray});
  }
  submitNote = (note) =>{
    console.log(Date.now())
    const newNote = {
      id:Date.now(),
      content:note
    }
    const curNotes = this.state.noteArray;
    curNotes.splice(0,0, newNote);
    //console.log(curNotes);
    this.setState(
      
      {input:"",noteArray:curNotes})
    
  }
  render(){
  return (
    <div className="App">
      <UserInput submitNote={this.submitNote} updateBoard={this.updateBoard} />
      <Board input={this.state.input}/>
      <NotesList deleteNote={this.deleteNote} noteArray={this.state.noteArray}/>
    </div>
  )
}
}

export default App;
