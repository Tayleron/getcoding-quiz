import React, { Component } from 'react';
import TitleBlock from './TitleBlock.js';
import QuestionsBlock from './QuestionsBlock.js';
import ResultsBlock from './ResultsBlock.js';

//function save
class App extends Component {
    render() {
        return (
            <div><h3>App Block</h3>
               <TitleBlock />
               <ResultsBlock />
               <QuestionsBlock />
               <button className="save">Save</button>
            </div>
        )
    }
}

export default App