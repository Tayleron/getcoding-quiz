import React, { Component } from 'react';
import TitleBlock from './TitleBlock.js';
import QuestionsBlock from './QuestionsBlock.js';
class App extends Component {
    render() {
        return (
            <div>
               <TitleBlock />
               <QuestionsBlock />
            </div>
        )
    }
}

export default App