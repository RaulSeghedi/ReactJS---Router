import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import {User} from './components/User';
import {Home} from './components/Home';
import {Root} from './components/Root';
import {Contact} from './components/Contact';
import Projects from './components/Projects';

class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route path="/" component={Root}/>
                        <Route path="/user" component={User}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/projects" component={Projects}/>
                        <Route path="/contact" component={Contact}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;