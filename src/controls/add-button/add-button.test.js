import { render, screen } from '@testing-library/react';
import AddButton from './add-button.js';

test('it can be rendered', () => {
  render(<AddButton />);
  expect(screen).not.toBeNull();
});
