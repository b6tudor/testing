import React            from 'react'
import { shallow }      from 'enzyme'

import App              from 'components/App'
import CommentList      from 'components/CommentList'
import CommentBox       from 'components/CommentBox'





//try not to reach into a component if not necissary
//test should be generalized

describe('<App/>',()=>{

    const wrapped = shallow( <App/> )

    it('shows a comment list',()=>{
        expect(wrapped.find(CommentList).length).toEqual(1);
    })

    it('shows a comment box', ()=>{
        expect(wrapped.find(CommentBox).length).toEqual(1);
    })

})



