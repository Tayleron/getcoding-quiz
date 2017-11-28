import React from "react";
import ABox from './ABox.js';

//fuction addAnswer
class QBox extends React.Component {
    render() {
        return (
            <div className="question">
                Question<input type="text" className="qText"/>
                <ABox />          
                <button className="addAnswer">+ Answer</button>
            </div>
        )
    };
}

export default QBox;