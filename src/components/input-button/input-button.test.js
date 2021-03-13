import { render, act, screen, fireEvent } from '@testing-library/react';
import InputButton from './input-button.js';

describe('InputButton', () => {
	test('onFormSubmit', () => {
		// here we will test that the form submits when you hit enter
		const BUTTON_LABEL = "TEST_BUTTON";
		const onSubmit = () => {
			expect(true);
		};
		const { container } = render(<InputButton onSubmit={onSubmit} buttonLabel={BUTTON_LABEL} />);
		const button = container.querySelector('.app-button');
		const buttonLabel = button.querySelector('label');
		const { textContent } = buttonLabel;

		expect(textContent === BUTTON_LABEL);

		button.click();
	});
});
