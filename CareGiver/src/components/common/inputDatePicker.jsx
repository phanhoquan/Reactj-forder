import React from "react";

class InputDatePicker extends React.Component {

	render() {
		return (
			<input
				placeholder={this.props.placeholder}
				onClick={this.props.onClick}
				value={this.props.value}
				readOnly
			/>
		)
	}
}

export default InputDatePicker;

