import React, { Component } from 'react';


class QuestionsBlock extends Component {
    render() {
        return (
            <div>
                Question<input type="text" className="question"/>
                <br/>
                Answer<input type="text" className="answer"/>
                <select name="corResult" id="">
                    <option value="result1">Result 1</option>
                </select>
                <button className="addAnswer">+ Answer</button>
                <br/>
                <button className="addQuestion">+ Question</button>
            </div>
            
        )
    };
}

export default QuestionsBlock