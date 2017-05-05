import React from 'react';
import TaskItem from './TaskItem';
import AddTask from './AddTask';

class Tasks extends React.Component {
    constructor(){
        super();
        this.state = {
            tasks: []
        }
    }

    componentWillMount(){
        let task = localStorage.getItem('storedTasks');
        if (task){
            this.setState({
                tasks: JSON.parse(task)
            })
        }
        // this.setState({
        //     tasks: ['first task', 'second task']
        // })
    }

    addTask(task){
        let tasks = this.state.tasks;
        tasks.push(task);
        this.setState({tasks: tasks})
        this.updateLocalStorage(tasks)
    }

    removeTask(task){
        let tasks = this.state.tasks;
        tasks.splice(tasks.indexOf(task), 1);
        this.setState({tasks: tasks});
        this.updateLocalStorage(tasks)
    }

    updateLocalStorage(updatedTask){
        console.log('task updated');
        localStorage.setItem('storedTasks', JSON.stringify(updatedTask));
    }

    render() {
        return (
            <div>
                <AddTask tasks={this.state.tasks} addTask={this.addTask.bind(this)}/><br/>
                <TaskItem tasks={this.state.tasks} remove={this.removeTask.bind(this)}/>
            </div>
        );
    }
}

export default Tasks;

Tasks.PropTypes = {
    tasks: React.PropTypes.array
}