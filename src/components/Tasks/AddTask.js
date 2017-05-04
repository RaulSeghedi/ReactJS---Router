import React from 'react';

class AddTask extends React.Component {

    justSubmitted(e){
        e.preventDefault(); // prevent the page from reloading
        let item = e.target.querySelector('input');
        let value = item.value;
        item.value = '';
        this.props.addTask(value);
    }

    render() {
        return (
            <form onSubmit={this.justSubmitted.bind(this)}>
                    <label>Add task</label><br/>
                    <input type="text"/>
            </form>
        );
    }
}

export default AddTask;

AddTask.PropTypes = {
    addTask: React.PropTypes.func
}