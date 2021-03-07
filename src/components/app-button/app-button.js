import React from 'react';
import PropTypes from 'prop-types';

const AppButton = function (props) {
	const { onClick, children } = props;

	return (
		<div className="app-button">
			<button type="button" onClick={onClick}>{children}</button>
		</div>
	);
};

AppButton.propTypes = {
	onClick: PropTypes.func
};

export default AppButton;
