import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from '../../reducers'
import CommentList from '../CommentList'
import App from '../App'

const store = createStore(reducer)

//try not to reach into a component if not necissary
//test should be generalized

it('shows a comment box',()=>{
    //creates a div in memory to fool react to thinking it's running in the browser

    const div = document.createElement('div');
    //area for test code
    //renders above to the screen
    ReactDOM.render(<Provider store={store}>
            <App/>
        </Provider>
        ,div)
        console.log(div.innerHTML);

        
    
    //cleans up test area
    ReactDOM.unmountComponentAtNode(div)
})

// it('shows a comment list',()=>{

// })

