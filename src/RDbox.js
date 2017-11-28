import React, { Component } from 'react';

class ResultsDescription extends Component {
    render() {
        return (
                <div>
                    <form>
                        <label>Description: <input type="text" name="rDescription" />
                        </label>

                        <input type="submit" value="Submit" />
                    </form>
                </div>        
            
        )
    };
}

export default ResultsDescription

//       <answersList listItems={this.state.answers} />



//  function Question(props) {
//     return (
//       <h2 className="question">{props.content}</h2>
//     );
//   }

//   Question.propTypes = {
//     content: React.PropTypes.string.isRequired
//   };

//   export default Question;