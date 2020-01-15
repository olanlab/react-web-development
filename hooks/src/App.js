import React from "react";
import CounterV1 from "./components/CounterV1";
import CounterV2 from "./components/CounterV2";
import CounterV3 from "./components/CounterV3";
import CounterV4 from "./components/CounterV4";
import CounterV5 from "./components/CounterV5";
import CustomTextInputV1 from "./components/CustomTextInputV1";
import CustomTextInputV2 from "./components/CustomTextInputV2";
import Timer from "./components/Timer";

import ThemeContext, { themes } from "./contexts/ThemeContext";

const App = () => {
	return (
		<ThemeContext.Provider value={themes.light}>
			<div>
				<Timer />
			</div>
			<div>
				<CounterV5 />
				
				<CustomTextInputV2 />
			</div>
		</ThemeContext.Provider>
	);
};

export default App;
