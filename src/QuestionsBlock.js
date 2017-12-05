import React, { Component } from 'react';
import QBox from "./QBox.js";

const QuestionsList = (props) => {
	const questions = props.questions;
	const listQuests =
		questions.map((question, index) =>
			<QBox
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
		return (
			<div>
				<h3>Questions Block</h3>
				<QuestionsList
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