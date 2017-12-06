import React, { Component } from 'react';
import QBox from "./QBox.js";

const QuestionsList = (props) => {
	const { onChange, questions } = props
	console.log(onChange)
	const listQuests =
		questions.map((question, index) =>
			<QBox
				onChange={onChange}
				question={question}
				key={index}
				index={index}
				handleDeleteQ={props.handleDeleteQ}
			/>
		);
	return (
		<div>
			{listQuests}
		</div>
	);
}
class QuestionsBlock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questions: ['']
		}
	}
	handleAddQuestion() {
		const questions = this.state.questions.slice();
		questions.push('');
		this.setState({
			questions: questions
		}, function () {
			console.log('Question Added');
		});
	}
	handleDeleteQ(index) {
		const questions = this.state.questions.slice();
		questions.splice(index, 1)
		this.setState({
			questions: questions
		}, function () {
			console.log('Question Deleted')
		});
	}
	render() {
		const { onChange } = this.props
		return (
			<div>
				<h3>Questions Block</h3>
				<QuestionsList
					onChange={onChange}
					questions={this.state.questions}
					handleDeleteQ={(index) =>
						this.handleDeleteQ(index)}
				/>
				<button
					onClick={() =>
						this.handleAddQuestion()
					}>
					+ Question
        </button>
			</div>
		)
	};
}

export default QuestionsBlock