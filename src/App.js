import logo from "./logo.svg";
import "./App.css";

import Calculator from "./components/Calculator";
import Header from "./components/Header";
import CalculatorClass from "./components/CalculatorClass";

function App() {
	return (
		<div className="App">
			<Header />
			<main>
				{/* <Calculator /> */}
				<CalculatorClass />
			</main>
		</div>
	);
}

export default App;
