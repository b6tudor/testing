//Shows a text area
//shows a button
//can input into text area
//when submitted text area is emptied
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {saveComment} from '../actions'

class CommentBox extends Component{
    
    state={
        text:""
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.saveComment(this.state.text)
        this.setState(()=>{return {text:""}})
    }

    onTextChange = (text) => this.setState(()=>{return{text}})
    render(){
        return(
            <div>
                <form onSubmit={(event)=>{this.onSubmit(event)}}>
                    <h2>Enter a Comment</h2>
                    <textarea 
                        placeholder="Enter a comment here"
                        onChange={(event)=>{this.onTextChange(event.target.value)}}
                        value={this.state.text}
                    />
                    <button className="ui primary button" style={style.buttonStyle}>Submit</button>
                </form>
            </div>
        )
    }
}



export default connect(null,{saveComment})(CommentBox)

const style = {
    buttonStyle:{
        display: 'block'
    }
    
}

