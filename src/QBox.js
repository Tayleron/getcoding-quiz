import React from "react";
import ABox from './ABox.js';

function answersList(props) {
    const answers = props.answers;
    const listItems = answers.map((answer) =>
        <li key={answers.toString()}>
            {answers}
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}
class QBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answers: []
        };
    }
    
    handleAddAnswer(props) {
        this.setState({
            answers: <ABox />
        }, function() {
            console.log('Answer Added');
        });
    }

    render() {
        const answers = []

        return (
            <div className="question">
                Question<input type="text" className="qText"/>
                <answersList listItems={answers} />
                <ABox />
                <button onClick={() => this.handleAddAnswer()}>+ Answer</button>
            </div>
        )
    };
}

export default QBox;