import React from "react";
import { useState } from "react";
import Nav from "./Nav";
import PiggyListLister from "./PiggyListLister";

import hogs from "../porkers_data";


function App() {

	const [swines, setSwines] = useState(hogs)

	const handleGreasedHogs = () => {
		const greasedHogsList = hogs.filter((hog) => hog.greased === true)
		setSwines(greasedHogsList)
	}

	const handleSortingHogs = (e) => {
		const selection = e.target.value
		if (selection === "name") {
			const nameSortedHogs = hogs.sort((a, b) => {
				if (a.name < b.name) {
					return -1;
				}
				if (a.name > b.name) {
					return 1
				}
				return 0;
			})
		setSwines([...nameSortedHogs])
		}
		if (selection === "weight") {
			const weightSortedHogs = hogs.sort((a, b) => a.weight - b.weight)
			setSwines([...weightSortedHogs])
		}
	}


	return (
		<div className="App">
			<Nav handleGreasedHogs={handleGreasedHogs} handleSortingHogs={handleSortingHogs} />
			<PiggyListLister swines={swines}/>
		</div>
	);
}

export default App;
