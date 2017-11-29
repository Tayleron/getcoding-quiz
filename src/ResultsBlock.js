import React, { Component } from 'react';
import ResultsItem from './ResultsItem.js';


const ResultsList = (props) => {
    const results = props.results;
    const listResults = 
        results.map((result, index) => 
            <ResultsItem 
                resultTitle={result.resultTitle}
                resultDescription={result.resultDescription}
                key={index}
                index={index}
                //handleDeleteQ={props.handleDeleteQ}
            />
        );

        console.log(results)
    return (
        <div>{listResults}</div>
    );
}


class ResultsBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: ['']
        }
    }

    handleAddResult() {
        const results = this.state.results.slice();
        results.push('');
        this.setState({
            results: results
        }, function() {
            console.log('Result Added');
        });
    }

    render() {
        return (
            <div>
                <div>
                        <ResultsList results={this.state.results} />
                </div>
                <button onClick={() => this.handleAddResult()}>+ Result</button>
            </div>
            
        )
    };
}
//                <QuestionsList questions={this.state.questions} /> handleDeleteQ={(index) => this.handleDeleteQ(index)} />

export default ResultsBlock