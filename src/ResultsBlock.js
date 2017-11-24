import React, { Component } from 'react';

class ResultsBlock extends Component {
    render() {
        return (
            <div><h3>Results Block</h3>
                <div>
                    Result Title<input type="text" className="resultTitle"/>
                    <br/>
                    Result Description<input type="text" className="resultDesc"/>
                </div>
                <br/>
                <button className="addResult">+ Result</button>
            </div>
            
        )
    };
}

export default ResultsBlock