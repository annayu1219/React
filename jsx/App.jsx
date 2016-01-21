import React from 'react'
import { browserHistory, Router, Route } from 'react-router'
//import Comments from './Comments'

class App extends React.Component {
    render() {
        return (
            <div>
                <h2>App</h2>
            </div>
        )
    }
}

export default App

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            //<Route path="comments" component={Comments}/>
            //<Route path="addComment" component={AddComment}/>
        </Route>
    </Router>
), document.getElementById('app'));