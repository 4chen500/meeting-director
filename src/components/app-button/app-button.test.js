import { render, act } from '@testing-library/react';
import AppButton from './app-button.js';

describe('AppButton', () => {

	test('onClick', () => {
		const handleClick = jest.fn().mockResolvedValue('success');
		const { container } = render(<AppButton onClick={handleClick} />);
		const button = container.querySelector('.app-button button');

		act(() => {
			button.click();
		});

		expect(handleClick).toHaveBeenCalled();
	});
});
