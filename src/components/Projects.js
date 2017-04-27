import React, {Component} from 'react';
import ProjectItem from './ProjectItem';
import AddProject from './AddProject';
import uuid from 'uuid';

class Projects extends Component {
    constructor() {
        super();
        this.state = {
            projects: []
        }
    }

    componentWillMount() {
        this.setState({
            projects: [
                {
                    id: uuid.v4(),
                    title: 'Business Website',
                    category: 'Web Design'
                },
                {
                    id: uuid.v4(),
                    title: 'Social App',
                    category: 'Mobile Development'
                },
                {
                    id: uuid.v4(),
                    title: 'Ecommerce Shopping Cart',
                    category: 'Web Development'
                }
            ]
        });
    }

    handleAddProject(project){
        let projects = this.state.projects;
        projects.push(project);
        this.setState({projects: projects});
    }

    deleteProject(id){
        let projects = this.state.projects;
        let index = projects.findIndex(x => x.id === id);
        projects.splice(index, 1);
        this.setState({projects: projects});
    }

    render() {
        let projectItems;
        if (this.state.projects) {
            projectItems = this.state.projects.map(project => {
                return (
                    <ProjectItem key={project.title} project={project} onDelete={this.deleteProject.bind(this)}/>
                )
            })
        };
        return (
            <div>
                <AddProject addProject={this.handleAddProject.bind(this)}/>
                <h3>Latest projects</h3>
                {projectItems}
            </div>
        )
    }
}

Projects.PropTypes = {
    projects: React.PropTypes.array,
}

export default Projects;