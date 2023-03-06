import React,{Component} from "react";
class Note extends Component{
    deleteSavedNote = ()=>{
        //console.log(this.props.key)
        return this.props.deleteNote(this.props.id);
    }
    render(){
        return(
            <li className="saved-note">{this.props.note}<span onClick={this.deleteSavedNote} className="delete-note">x</span></li>
            
        )
    }
}
export default Note