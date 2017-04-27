import React, {Component} from 'react';
import uuid from 'uuid';

class AddProject extends Component {
    constructor() {
        super();
        this.state = {
            newProject: {}
        }
    }

    static defaultProps = {
        categories: ['Web Design', 'Mobile Development', 'Ecommerce Shopping Cart']
    };

    handleSubmit(e) {
        if (this.refs.title.value === '') {
            alert('ENTER SOME TEXT');
        } else {
            this.setState({
                newProject: {
                    id: uuid.v4(),
                    title: this.refs.title.value,
                    category: this.refs.category.value
                }
            }, function () {
                this.props.addProject(this.state.newProject);
            });
        }
        e.preventDefault();
    }

    render() {
        let categoryOptions = this.props.categories.map(category => {
            return <option value={category} key={category}>{category}</option>
        });
        return (
            <div>
                <h3>Add project</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>Title</label><br/>
                        <input type="text" ref='title'/>
                    </div>
                    <div>
                        <label>Category</label><br/>
                        <select ref='category'>
                            {categoryOptions}
                        </select>
                    </div>
                    <br/>
                    <input type="submit" value='Submit'/>
                </form>
            </div>
        )
    }
}

AddProject.PropTypes = {
    categories: React.PropTypes.array,
}

export default AddProject;