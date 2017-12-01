import React, { Component } from 'react';


//class ResultsItem extends Component {


    const ResultsItem = (props) => {
        
        return (
                                    <form>
            
                                            <label>
            
                                                 <textarea
                                                 onChange={(event) => props.handleTextChange(event, props.index)}
                                                 name="resultTitle"
                                                    value={props.resultTitle}
                                                    type="text"
                                                />
                                            </label>
            
                                            <label>
                                                    <textarea
                                                        onChange={(event) => props.handleTextChange(event, props.index)}
                                                        name="resultDescription"
                                                        value={props.resultDescription}
                                                        type="text"
                                                    />
                                            </label>
                                    </form>
                            
                        
                    )

    };


//     constructor(props) {
//         super(props);
//         this.state = {
//                 resultTitle: '',
//                 resultDescription: ''
//             };
    
//         this.handleSubmit = this.handleSubmit.bind(this);
//       }
    
            //         const target = event.target;
//         const name = target.name;
//         const value = target.type;
    
//         this.props(event.target.value);

//         // this.setState({
//         //         resultTitle: target.resultTitle,
//         //         resultDescription: target.resultDescription
//         //   });

//       handleSubmit(event) {
//         const target = event.target;
//         const name = target.name;
//         const value = target.type;
    
//         this.props(event.target.value);

//         // this.setState({
//         //         resultTitle: target.resultTitle,
//         //         resultDescription: target.resultDescription
//         //   });

//           console.log('Submitted: ' + target.resultTitle + " & " + target.resultDescription);

//         event.preventDefault();
//       }

//     render() {
//         return (
//                         <form onSubmit={this.handleSubmit}>

//                                 <label>

//                                      <textarea
//                                         onChange={(event) => this.handleTextChange(event)}
//                                         name="resultTitle"
//                                         type="text"
//                                     />
//                                 </label>

//                                 <label>
//                                         <textarea
//                                             onChange={(event) => this.handleTextChange(event)}
//                                             name="resultDescription"
//                                             type="text"
//                                         />
//                                 </label>
//                         </form>
                
            
//         )
//     };
// }

export default ResultsItem