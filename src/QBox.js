import React from "react";
import ABox from './ABox.js';

const AnswersList = (props) => {
	const answers = props.answers;
	const listItems =
		answers.map((answer, index) =>
			<ABox
				// onChange={onChange}
				answer={answer}
				key={index}
				index={index}
				handleDelete={props.handleDelete}
			/>
		);

	return (
		<div>{listItems}</div>
	);
}
class QBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			answers: ['']
		};
	}

	handleAddAnswer() {
		const answers = this.state.answers.slice();
		answers.push('');
		this.setState({
			answers: answers
		}, function () {
			console.log('Answer Added');
		});
	}

	handleDelete(index) {

		const answers = this.state.answers.slice();
		answers.splice(index, 1)
		this.setState({
			answers: answers
		}, function () {
			console.log('Answer Deleted')
		});
	}

	render() {
		const { onChange, index } = this.props
		console.log(onChange)
		return (
			<div className="question">
				Question<input type="text" className="qText" onChange={onChange} name="question" index={index}/>
				<AnswersList answers={this.state.answers} handleDelete={(index) => this.handleDelete(index)} />
				<button onClick={() => this.handleAddAnswer()}>+ Answer</button>
				<button onClick={() => this.props.handleDeleteQ(this.props.index)}>Delete Question</button>
			</div>
		)
	};
}

export default QBox;