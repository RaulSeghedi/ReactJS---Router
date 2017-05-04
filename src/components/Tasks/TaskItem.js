import React from 'react';

class TaskItem extends React.Component {

    removeTask(element){
        let value = element.target.parentNode.querySelector('span').innerText;
        this.props.remove(value);
    }

    render() {

        const styleList = {
            listStyle: 'none',
            position: 'absolute',
            paddingLeft: 0,
        };

        const styleButton = {
            height: 20,
            width: 40,
            borderRadius: 10,
            position: 'absolute',
            left: 200,
            textAlign: 'center',
            backgroundColor: 'red',
            color: 'white',
            fontSize: 12
        };

        let item = this.props.tasks.map((element, i) => {
            return (
                <li key={i}>
                    <span>{element}</span>
                    <button style={styleButton} onClick={this.removeTask.bind(this)}>DEL</button>
                </li>
            )
        });
        return (
            <ul style={styleList}>
                {item}
            </ul>
        );
    }
}

export default TaskItem;

TaskItem.PropTypes = {
    tasks: React.PropTypes.array
}