import React, { Component } from 'react';
import TitleBlock from './TitleBlock.js';
import QuestionsBlock from './QuestionsBlock.js';
import ResultsBlock from './ResultsBlock.js';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            MyQuiz: {
                "title" : {
                    "title" : "",
                    "desc" : ""
                },
                "results" : [
                    {
                    "id" : "",
                    "title" : "",
                    "desc" : "",
                    },
                ],
                "questions" : [
                    {
                    "id" : "",
                    "question" : "",
                        "answers" : [
                            {
                            "id" : "",
                            "text" : "",
                            "corResult" : "",
                            },
                        ]              
                    },
                ]
            }
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
        "title" : "",
        "desc" : ""
    },
    "results" : [{
        "id" : "",
        "title" : "",
        "desc" : ""
    }]
    "questions" : [{
        "id" : "",
        "question" : ""
        "answers" : [{
            "id" : "",
            "text" : "",
            "corResult" : ""
            },
        ]              
    }]
}
*/