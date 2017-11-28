import React, { Component } from 'react';
import RTbox from './RTbox.js';
import RDbox from './RDbox.js';


class ResultsBlock extends Component {

    constructor(props) {
        super(props);
        this.state = {
                resultTitle: '',
                resultDescription: ''
            };
    
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(event) {
        const target = event.target;

        const rTitle = target.resultTitle;
        const rDescription = target.resultDescription;
        
        console.log('Submitted: ' + rTitle + " & " + rDescription);

        this.setState({
            [name]: value
          });

        event.preventDefault();
      }



    render() {
        return (
            <div>
                <div>
                        <form onSubmit={this.handleSubmit}>

                                <label>

                                     <textarea

                                        name="resultTitle"
                                        type="text"
                                        value={this.state.resultTitle}
                                    />
                                        

                                </label>

                                <label>
                                        <textarea

                                                name="resultDescription"
                                                type="text"
                                                value={this.state.resultDescription}
                                        />
                                </label>
                        
                                <input type="submit" value="Submit" />    

                        </form>
                </div>
                <br/>
                <button className="addResult">+ Result</button>
            </div>
            
        )
    };
}

export default ResultsBlock