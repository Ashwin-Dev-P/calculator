import React from "react";

const Result = (props) => {
	var { a, b } = props;
	a = Number(a);
	b = Number(b);
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
};

export default Result;
