import React from "react";

class ABox extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.state = {exists: true};
    }
    
    handleDelete(props) {
        this.setState({
            exists:false
        }, function() {
            console.log('Answer Deleted!');
        });
    }
    
    render() {
        const exists = this.state.exists;
        
        if (exists) {
            return (
                <div>
                    Answer<input type="text" className="aText"/>
                    <select name="corResult" id="">
                        <option value="result1">Result 1</option>
                        <option value="result2">Result 2</option>
                    </select>
                    <button onClick={this.handleDelete}>Delete</button>
                </div>
            )
        } else {
            return null;
        }
    };
}

export default ABox;