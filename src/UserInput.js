import React,{Component} from "react";

class UserInput extends Component{
    state={
        inputValue:""
    }
    updateChalkBoard = (e)=>{
                const value = e.target.value;
                this.setState({inputValue:value})
              return  this.props.updateBoard(this.state.inputValue);
            }
    submitNewNote = (e)=>{
        e.preventDefault()
        //console.log(this.state.inputValue);
        return this.props.submitNote(this.state.inputValue);    
    
    }         
    render(){
       
        return(
            <form onSubmit={this.submitNewNote} className="user-input">
                <input onChange={this.updateChalkBoard} className="type-in" type='text'></input>
                <input type='submit' value='Submit'></input>
            </form>
        )

    }
}
export default UserInput