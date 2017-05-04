import React from 'react';

export class Contact extends React.Component {
    constructor() {
        super();
        this.state = {
            initialEmail: "user@gmail.com",
        };
    }

    changeEmail(newEmail) {
        this.setState({
            initialEmail: newEmail
        })
    }

    onChangeHandler(event){
        const newEmail = event.target.value;
        this.changeEmail(newEmail);
    }


    render() {
        return (
            <div>
                <h3>Contact Page</h3>
                <p>E-mail: {this.state.initialEmail}</p>
                <hr/>
                <h3>Change E-mail</h3>
                <input
                    type="text"
                    value={this.state.initialEmail}
                    onChange={(event) => this.onChangeHandler(event)}
                />
            </div>
        );
    }
}

Contact.PropTypes = {
    initialEmail: React.PropTypes.string,
    newEmail: React.PropTypes.string
}