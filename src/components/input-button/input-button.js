import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import AppButton from '../../components/app-button';
const InputButton = function(props) {
	const { label } = props;
	const inputRef = useRef(null);
	const getInputValue = () => inputRef && inputRef.current && inputRef.current.value || '';
	const [isEdit, setEdit] = useState(false);
	const [buttonLabel, setButtonLabel] = useState(label);
	const onSubmitLabel = (event) => {
		event.preventDefault();
		setButtonLabel(getInputValue());
	};

	return (
		<AppButton onClick={() => setEdit(!isEdit)} >
			<label htmlFor="input-button-input">{buttonLabel}</label>
			<form onSubmit={onSubmitLabel}>
				<input ref={inputRef} name="input-button-input" className="input-button-input" type="text"></input>
			</form>
		</AppButton>
	);
};

InputButton.propTypes = {
	label: PropTypes.string
};

InputButton.defaultProps = {
	label: '+'
};

export default InputButton;
