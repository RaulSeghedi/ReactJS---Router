import React, {Component} from 'react';
import ProjectItem from './ProjectItem';
import AddProject from './AddProject';

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
                    title: 'Business Website',
                    category: 'Web Design'
                },
                {
                    title: 'Social App',
                    category: 'Mobile Development'
                },
                {
                    title: 'Ecommerce Shopping Cart',
                    category: 'Web Development'
                }
            ]
        });
    }

    render() {
        let projectItems;
        if (this.state.projects) {
            projectItems = this.state.projects.map(project => {
                return (
                    <ProjectItem key={project.title} project={project} />
                )
            })
        };
        return (
            <div>
                <AddProject />
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