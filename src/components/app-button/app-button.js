import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./style.css";

const AppButton = function(props) {
	const { onClick, children, className } = props;

	return (
		<div className={classnames("app-button", className)}>
			<button type="button" onClick={onClick}>
				{children}
			</button>
		</div>
	);
};

AppButton.propTypes = {
	onClick: PropTypes.func,
};

export default AppButton;
