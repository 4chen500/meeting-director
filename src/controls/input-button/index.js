import React, { useState } from 'react';
import AppButton from '../../components/app-button';

const InputButton = function(props) {
	const [isEdit, setEdit] = useState(false);
	const editInput = <input type="text"></input>;
	const { label } = props;

	let buttonLabel = label;

	if (isEdit) {
		buttonLabel = editInput;
	}

	return (
		<AppButton label={buttonLabel} onClick={() => setEdit(!isEdit)} />
	);
};

export default InputButton;
