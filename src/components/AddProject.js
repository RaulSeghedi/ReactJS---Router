import React, {Component} from 'react';

class AddProject extends Component {

    static defaultProps = {
        categories: ['Web Design', 'Mobile Development', 'Ecommerce Shopping Cart']
    };

    render() {
        let categoryOptions = this.props.categories.map(category => {
            return <option value={category} key={category}>{category}</option>
        });
        return (
            <div>
                <h3>Add project</h3>
                <form>
                    <div>
                        <label>Title</label><br/>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Category</label><br/>
                        <select>
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