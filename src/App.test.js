import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'; // Assuming the component is named App
import { BrowserRouter } from 'react-router-dom';
test('Renders the main component', () => {
  render(<BrowserRouter><App/></BrowserRouter>);
  const mainElement = screen.getByRole('main');
  expect(mainElement).toBeInTheDocument();
});