import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero title for Aterra', () => {
  render(<App />);
  const heading = screen.getByText(/Инжиниринговые услуги для нефтегазовой отрасли/i);
  expect(heading).toBeInTheDocument();
});
