import React from "react";

class ABox extends React.Component {
    
    render() {
        
        console.log(this.props)
        
        return (
            <div>
                Answer<input type="text" className="aText" value={this.props.answer}/>
                <select name="corResult" id="">
                    <option value="result1">Result 1</option>
                    <option value="result2">Result 2</option>
                </select>
                <button onClick={() => this.props.handleDelete(this.props.index)}>Delete</button>
            </div>
        )
    }
};


export default ABox;