import React, { Component } from 'react';


class ResultsItem extends Component {

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
        const name = target.name;
        const value = target.type;
    
        this.setState({
                rTitle: target.resultTitle,
                rDescription: target.resultDescription
          });

          console.log('Submitted: ' + target.resultTitle + " & " + target.resultDescription);

        event.preventDefault();
      }


    handleTextChange (event) {
        const {name, value} = event.target
        console.log(name, value)

        this.setState({[name]: value})
    }


    render() {
        return (
                
                        <form onSubmit={this.handleSubmit}>

                                <label>

                                     <textarea
                                        onChange={(event) => this.handleTextChange(event)}
                                        name="resultTitle"
                                        type="text"
                                    />

                                </label>

                                <label>
                                        <textarea
                                            onChange={(event) => this.handleTextChange(event)}
                                            name="resultDescription"
                                            type="text"
                                        />
                                </label>
                                    

                        </form>
                
            
        )
    };
}

export default ResultsItem