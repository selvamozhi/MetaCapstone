import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
test('Renders the main component', () => {
  render(<App/>);
  const mainElement = screen.getByRole('main');
  expect(mainElement).toBeInTheDocument();
});