import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import {Home} from './components/Home/Home';
import {Root} from './components/Root';
import {Contact} from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Tasks from './components/Tasks/Tasks';

class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route path="/" component={Root}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/projects" component={Projects}/>
                        <Route path="/tasks" component={Tasks}/>
                        <Route path="/contact" component={Contact}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;