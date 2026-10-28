import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the HP Store navigation', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /hp store/i })).toBeInTheDocument();
});
