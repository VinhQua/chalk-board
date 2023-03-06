import React,{Component} from "react";
class Board extends Component{
    render(){
        return(
            <div className="board">
                <div className="upper-board">
                    <div className="display-text">{this.props.input}</div>
                </div>
                <div className="lower-board"></div>
            </div>
        )
    }
}
export default Board;