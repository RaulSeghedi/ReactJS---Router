import React from 'react';
import {Header} from './Header';

export class Root extends React.Component {
    constructor() {
        super();
        this.state = {
            initialEmail: "user@gmail.com"
        }
    }

    changeEmail(newEmail) {
        this.setState({
            initialEmail: newEmail
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header />
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}