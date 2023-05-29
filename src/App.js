import logo from "./logo.svg";
import "./App.css";

import Calculator from "./components/Calculator";
import Header from "./components/Header";

function App() {
	return (
		<div className="App">
			<Header />
			<main>
				<Calculator />
			</main>
		</div>
	);
}

export default App;
