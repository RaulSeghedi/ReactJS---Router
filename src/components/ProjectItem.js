import React, {Component} from 'react';

class ProjectItem extends Component {
    render() {
        return (
            <li>
                <strong>{this.props.project.title} - </strong>{this.props.project.category}
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