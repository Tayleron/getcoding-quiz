import React, { Component } from 'react';
import TitleBlock from './TitleBlock.js';
import QuestionsBlock from './QuestionsBlock.js';
import ResultsBlock from './ResultsBlock.js';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			"title": "",
			"desc": "",
			"results": [
				{
					"id": "",
					"title": "",
					"desc": ""
				}
			],
			"questions": [
				{
					"id": "",
					"question": "",
					"answers": [
						{
							"id": "",
							"text": "",
							"corResult": ""
						}
					]
				}
			]
		}
	}

	handleChange(event) {
		const value = event.target.value
		const name = event.target.name
		console.log(name, value)

		this.setState({
			[name]: value
		})
	};
	handleQuestionsChange = (event) => {
		console.log(event.target)
		const value = event.target.value
		const name = event.target.getAttribute('name')
		const index = parseInt(event.target.getAttribute('index'))
		const questions = this.state.questions
		const question = questions[index] || {}
		question[name] = value
		question.id = index
		console.log(question)
	}
	render() {
		console.log(this.state)
		const title = this.state.title;
		const desc = this.state.desc;
		return (
			<div>
				<h3>App Block</h3>
				<TitleBlock
					title={title}
					desc={desc}
					onChange={(event) => this.handleChange(event)}
				/>
				<ResultsBlock />
				<QuestionsBlock
					onChange={this.handleQuestionsChange}
				/>
				<button>
					Save
          </button>
			</div>
		)
	}
}

export default App
