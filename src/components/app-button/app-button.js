import React from 'react';

const AppButton = function (props) {
	const { onClick, label } = props;

	return (
		<div className="app-button">
			<button type="button" onClick={onClick}>{label}</button>
		</div>
	);
};

export default AppButton;
