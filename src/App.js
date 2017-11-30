import React, { Component } from 'react';
import TitleBlock from './TitleBlock.js';
import QuestionsBlock from './QuestionsBlock.js';
import ResultsBlock from './ResultsBlock.js';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
           MyQuiz: {}
        };
    }
    handleSave(questions, answers) {
        const MyQuiz = ''
        this.setState({
            MyQuiz: {questions, answers}
        }, function() {
            console.log("Quiz Saved!")
            console.log(MyQuiz);
        });
    }
    render() {
        return (
            <div><h3>App Block</h3>
               <TitleBlock />
               <ResultsBlock />
               <QuestionsBlock />
               <button 
                    onClick={() => 
                        this.handleSave()
                    }>
                    Save
                </button>
            </div>
        )
    }
}

export default App
/*
structure of JSON
const MyQuiz = {
    "title" : {
        "title" : "Title of the Quiz",
        "desc" : "Description of the Quiz"
    },
    "result1" : {
        "title" : "Title of the result",
        "desc" : "Description of the result"
    }
    "result2" : {
        "title" : "Title of the result",
        "desc" : "Description of the result"
    }
    "result3" : {
        "title" : "Title of the result",
        "desc" : "Description of the result"
    }
    "question1" : {
        "question" : "The text of the question"
        "answer1" : "The text of the answer" : {
            "corResult" : "The corresponding result"
        }
        "answer2" : "The text of the answer" : {
            "corResult" : "The corresponding result"
        }
        "answer3" : "The text of the answer" : {
            "corResult" : "The corresponding result"
        }
    }
    "question2" : {
        "question" : "The text of the question"
        "answer1" : "The text of the answer" : {
            "corResult" : "The corresponding result"
        }
        "answer2" : "The text of the answer" : {
            "corResult" : "The corresponding result"
        }
        "answer3" : "The text of the answer" : {
            "corResult" : "The corresponding result"
        }
    }
}
*/