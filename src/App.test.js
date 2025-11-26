import { render, screen } from '@testing-library/react';
import App from './App';

test('renders reset message', () => {
  render(<App />);
  const heading = screen.getByText(/Сайт на переработке/i);
  expect(heading).toBeInTheDocument();
});
