//this component takes a list of comments and renders each one out on the screen
import React, {Component} from 'react'
import {connect} from 'react-redux'

class CommentList extends Component{
    
     renderList = () =>{
        return this.props.comments.map((comment)=>{
            return (
                <p key={ parseInt(Math.random()*100000)}>{comment}</p>
            )
        })
    }
    
    render(){
        return (
            <div id="CommentList">
                {this.renderList()}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        comments: state.comments
    }
}

export default connect(mapStateToProps)(CommentList)

