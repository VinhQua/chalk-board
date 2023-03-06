import React,{Component} from "react";
import Note from "./Note";
class NotesList extends Component{
    
    
    render(){
        const notes =this.props.noteArray.map(note=> <Note deleteNote={this.props.deleteNote} id={note.id} key={note.id} note={note.content}/>)
        //console.log(this.props.noteArray);
        console.log(notes)
        return(
            <ul className="note-list">
             {notes}
            </ul>
        )
        
    }
}
export default NotesList