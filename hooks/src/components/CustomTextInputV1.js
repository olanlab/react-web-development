import React, { Component, createRef } from "react";

class CustomTextInputV1 extends Component {
	textInput = createRef();

	focusTextInput = () => this.textInput.current.focus();

	render() {
		return (
			<>
				<input type="text" ref={this.textInput} />
				<button onClick={this.focusTextInput}>Focus the text input</button>
			</>
		);
	}
}

export default CustomTextInputV1;
