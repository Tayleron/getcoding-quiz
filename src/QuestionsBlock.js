import React, { Component } from 'react';
import QBox from "./QBox.js";

//fuction addQuestion
class QuestionsBlock extends Component {
    render() {
        return (
            <div>
                <h3>Questions Block</h3>
                <QBox />
                <br/>
                <button className="addQuestion">+ Question</button>

            </div>
            
        )
    };
}

export default QuestionsBlock