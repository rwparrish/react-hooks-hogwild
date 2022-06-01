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


	return (
		<div className="App">
			<Nav handleGreasedHogs={handleGreasedHogs} />
			<PiggyListLister swines={swines}/>
		</div>
	);
}

export default App;
