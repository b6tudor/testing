//shows Comment Box
//Shows Comment List
import React, { Component } from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';


class App extends Component {
  render() {
    return (
      <div className="ui container">
        <CommentBox />
        <CommentList />
      </div>
    );
  }
}

export default App;
