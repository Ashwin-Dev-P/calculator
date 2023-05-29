import React, { useState } from "react";

// Components.
import Result from "./Result";

// Styles.
import "../styles/common.css";

const Calculator = () => {
	const [allValues, setAllValues] = useState({
		a: null,
		b: null,
	});

	const changeHandler = (e) => {
		setAllValues({ ...allValues, [e.target.id]: e.target.value });
	};

	const { a, b } = allValues;
	return (
		<div className="my-flex-container">
			{a && b ? (
				<Result
					a={a}
					b={b}
				/>
			) : null}

			<form className="my-flex-item my-w-100 my-h-100 my-my-5">
				<div className="my-w-80 my-px-10 my-pt-5">
					<input
						type="number"
						inputMode="numeric"
						id="a"
						onChange={changeHandler}
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
						onChange={changeHandler}
						required
						className="my-w-100 my-py-5 my-text-center border-radius"
					/>
				</div>
			</form>
		</div>
	);
};

export default Calculator;
