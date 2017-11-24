import React from "react";

class QBox extends React.Component {
    render() {
        return (
            <div className="question">
                Question<input type="text" className="qText"/>
                <br/>
                Answer<input type="text" className="aText"/>
                <select name="corResult" id="">
                    <option value="result1">Result 1</option>
                </select>
                            
                <br/>
                <button className="addAnswer">+ Answer</button>
            </div>
        )
    };
}

export default QBox;