import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('renders Header section', () => {
  test('renders Header component', () => {
    render(<Header />);
    const linkElement = screen.getByText(/Header/i);
    expect(linkElement).toBeInTheDocument();
  });
});
