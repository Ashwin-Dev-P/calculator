import React, { Component } from "react";

export default class ResultClass extends Component {
	constructor(props) {
		super(props);

		this.state = {
			a: Number(this.props.a),
			b: Number(this.props.b),
		};
	}
	render() {
		const { a, b } = this.state;
		return (
			<div className="my-mx-5">
				<table className="my-w-100 my-my-5">
					<thead>
						<th role="col">Operation</th>
						<th role="result">Result</th>
					</thead>
					<tbody>
						<tr>
							<td>Addition</td>
							<td>{a + b}</td>
						</tr>
						<tr>
							<td>Subtraction</td>
							<td>{a - b}</td>
						</tr>
						<tr>
							<td>Multiplication</td>
							<td>{a * b}</td>
						</tr>
						<tr>
							<td>Division</td>
							<td>{Math.round((a / b) * 100) / 100}</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
