import "./App.css";
import { useEffect, useState } from "react";
function App() {
	const defaultValues = {
		status: "Same point",
		pointOfA: [1],
		pointOfB: [1],
		activeReset: false,
	};

	//Status of the game
	const [status, setStatus] = useState(defaultValues.status);
	const [activeResetBtn, setActiveResetBtn] = useState(defaultValues.activeReset);
	const [pointOfA, setPointOfA] = useState(defaultValues.pointOfA);
	const [pointOfB, setPointOfB] = useState(defaultValues.pointOfB);

	//Handle when the user click on Race button
	const handleClickRace = () => {
		setActiveResetBtn(true);
		var temp = Math.floor(Math.random() * 2) + 1;
		if (temp == 1) {
			setPointOfA(prev => [...prev, 1]);
		} else {
			setPointOfB(prev => [...prev, 1]);
		}
	};
	//When the point of A or the point of B is changed, reset the status of game
	useEffect(() => {
		if (pointOfA.length == pointOfB.length) {
			setStatus("Same point");
		} else if (pointOfA.length > pointOfB.length) {
			setStatus("A is winning");
		} else {
			setStatus("B is winning");
		}
	}, [pointOfA, pointOfB]);
	//Reset defualt values
	const handleClickReset = () => {
		setActiveResetBtn(defaultValues.activeReset);
		setStatus(defaultValues.status);
		setPointOfA(defaultValues.pointOfA);
		setPointOfB(defaultValues.pointOfB);
	};

	return (
		<div className="App">
			<header className="App-header">
				<h3 className="status">{status}</h3>
				<div className="character-name">Character A</div>
				<div className="container">
					{pointOfA.map(() => (
						<div className="block-point"></div>
					))}
				</div>
				<div className="character-name">Character B</div>
				<div className="container">
					{pointOfB.map(() => (
						<div className="block-point"></div>
					))}
				</div>

				<div className="container">
					<button className="btn-all" onClick={handleClickRace}>
						Race
					</button>
					{activeResetBtn && (
						<button className="btn-all" onClick={handleClickReset}>
							Reset
						</button>
					)}
				</div>
			</header>
		</div>
	);
}

export default App;
