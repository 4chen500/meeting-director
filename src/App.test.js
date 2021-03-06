import { render, screen } from '@testing-library/react';
import App from './App';

test('Basic not nully', () => {
  render(<App />);
  expect(screen).not.toBeNull();
});
