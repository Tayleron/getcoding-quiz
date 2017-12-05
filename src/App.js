import React, { Component } from 'react';
import TitleBlock from './TitleBlock.js';
import QuestionsBlock from './QuestionsBlock.js';
import ResultsBlock from './ResultsBlock.js';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            myQuiz: {
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

    handleChange(title, desc) {
        const qtitle = title;
        const qdesc = desc;
        
        this.setState(
            {myQuiz: {title: {title: qtitle, desc: qdesc}}},
            function(){console.log(this.state)}
        );
    };

    render() {
        const title = this.state.title;
        const desc = this.state.desc;
        return (
            <div><h3>App Block</h3>
                <TitleBlock 
                    title={title} 
                    desc={desc}
                    onChange={(title, desc) => this.handleChange(title, desc)} 
                />
                <ResultsBlock />
                <QuestionsBlock />
                <button>
                    Save
                </button>
            </div>
        )
    }
}

export default App