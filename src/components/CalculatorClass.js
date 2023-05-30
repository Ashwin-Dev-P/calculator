import React, { Component } from "react";

// Components.
import Result from "./Result";
import ResultClass from "./ResultClass";

// Styles.
import "../styles/common.css";

export default class CalculatorClass extends Component {
	constructor() {
		super();
		this.state = {
			a: null,
			b: null,
		};

		this.changeHandler = this.changeHandler.bind(this);
	}

	componentDidMount() {
		console.log("Component has mounted");
	}

	changeHandler(e) {
		this.setState({
			...this.state,
			[e.target.id]: [e.target.value],
		});
	}
	render() {
		const { a, b } = this.state;
		return (
			<div className="my-flex-container">
				{a && b ? (
					<>
						<ResultClass
							a={a}
							b={b}
						/>
					</>
				) : null}

				<form className="my-flex-item my-w-100 my-h-100 my-my-5">
					<div className="my-w-80 my-px-10 my-pt-5">
						<input
							type="number"
							inputMode="numeric"
							id="a"
							onChange={this.changeHandler}
							placeholder="Enter the number A"
							autoFocus
							required
							className="my-w-100 my-py-5 my-text-center border-radius"
						/>
					</div>
					<div className="my-w-80 my-px-10 my-pt-5">
						<input
							type="number"
							inputMode="numeric"
							id="b"
							placeholder="Enter the number B"
							onChange={this.changeHandler}
							required
							className="my-w-100 my-py-5 my-text-center border-radius"
						/>
					</div>
				</form>
			</div>
		);
	}
}
