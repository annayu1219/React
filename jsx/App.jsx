import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory, Router, Route } from 'react-router'
//import Comments from './Comments'

class App extends React.Component {
    render() {
        return (
            <div>
                <h2>App</h2>
            </div>
        )
    };
}

export default App

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App} />
    </Router>
), document.getElementById('app'));