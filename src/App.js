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
    handleUpdate(props) {
        this.setState({

        }, function() {
            console.log(this.state);
        });
    }

    handleChange(title) {
        const temp = this.state.title.slice();
        
        
        this.setState({
            myQuiz: temp
        });
    }


    render() {
        return (
            <div><h3>App Block</h3>
                <TitleBlock 
                    title={this.state.myQuiz.title.title} 
                    desc={this.state.myQuiz.title.desc}
                    onChange={(title) => this.handleChange(title)} 
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