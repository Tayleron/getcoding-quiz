import React, { Component } from 'react';
import ResultsItem from './ResultsItem.js';


const ResultsList = (props) => {

    const results = props.results;

    if(!results){

        return null

    }

    const listResults = 
        results.map((result, index) => 
            <ResultsItem 
                resultTitle={result.resultTitle}
                resultDescription={result.resultDescription}
                key={index}
                index={index}
                handleTextChange={props.handleTextChange}
                //handleDeleteQ={props.handleDeleteQ}
            />
        );

    return (
        <div>{listResults}</div>
    );
}


class ResultsBlock extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            
            results: [{

                resultTitle: '',
                resultDescription: ''

            }]

        }
    }

    handleAddResult() {
        const results = this.state.results.slice();
        results.push({resultTitle: '', resultDescription: ''});
        this.setState({
            results: results
        }, function() {
            console.log('Result Added');
            console.log(results);
        });
    }

    handleTextChange (event, index) {
        const {name, value} = event.target
        const temp = this.state.results.slice()
        temp[index][name] = event.target.value
        this.setState({results: temp})
    }

    render() {
        return (
            <div>
                <div>
                        <ResultsList results={this.state.results} handleTextChange={(event, index) => this.handleTextChange(event, index)}/>

                </div>
                <button onClick={() => this.handleAddResult()}>+ Result</button>
            </div>
            
        )
    };
}
//                <QuestionsList questions={this.state.questions} /> handleDeleteQ={(index) => this.handleDeleteQ(index)} />

export default ResultsBlock