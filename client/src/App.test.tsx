import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App container', () => {
  it.each(['header', 'main', 'footer'])
  ('should render header, main and %s', (componentId) => {
    render(<App />);
    const component = screen.getByTestId(componentId);
    expect(component).toBeInTheDocument()
  })

});
