import React, { useRef } from "react";

function CustomTextInputV2() {
	const textInput = useRef();

	const focusTextInput = () => textInput.current.focus();

	return (
		<>
			<input type="text" ref={textInput} />
			<button onClick={focusTextInput}>Focus the text input</button>
		</>
	);
}

export default CustomTextInputV2;
