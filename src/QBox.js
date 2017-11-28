import React from "react";
import ABox from './ABox.js';

function answersList(props) {
    const answers = this.props.answers;
    const listItems = 
    answers.map((answers) =>
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
            answers: ['']
        };
    }
    
    handleAddAnswer(props) {
        const answers = this.state.answers.slice();
        answers.push('');
        this.setState({
            answers: answers
        }, function() {
            console.log('Answer Added');
        });
    }

    render() {

        return (
            <div className="question">
                Question<input type="text" className="qText"/>
                <answersList listItems={this.state.answers} />
                <ABox />
                <button onClick={() => this.handleAddAnswer()}>+ Answer</button>
            </div>
        )
    };
}

export default QBox;