import React, {Component} from 'react';

class ProjectItem extends Component {

    deleteProject(id){
        this.props.onDelete(id);
    }

    render() {
        return (
            <li>
                <strong>{this.props.project.title} - </strong>{this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}> - DEL</a>
            </li>
        )
    }
}

ProjectItem.PropTypes = {
    project: React.PropTypes.array,
    title: React.PropTypes.string,
    category: React.PropTypes.string,
}

export default ProjectItem;