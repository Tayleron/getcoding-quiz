import React from "react";


function handleDelete(props) {
    return (
        this.setState = {delete: true},
        this.props.onClick(this.props.id)
    );
}

class ABox extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({delete: false});
    }
    
    render() {
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
    };
}

export default ABox;