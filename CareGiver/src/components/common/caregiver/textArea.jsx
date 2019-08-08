import React from 'react';

const TextArea = (props) => {
	return (
		<div className="input-wrap">
			<label className="input-title">
				{props.label}
			</label>
			<div className="basic-input">
				<textarea
					placeholder={props.placeholder}
					disabled
					value={props.value || ""}
				/>
			</div>
		</div>
	);
};

export default TextArea;