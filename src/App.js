import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import {User} from './components/User';
import {Home} from './components/Home';
import {Root} from './components/Root';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" component={Root}/>
                    <Route path="/user" component={User}/>
                    <Route path="/home" component={Home}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
