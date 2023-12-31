import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('When everything is OK', () => {
  beforeEach(() => {
    render(<App />);
  });
  test('should render the app component without crashing', () => {
    screen.debug();
  });

  test('should select the children that is being passed to the CustomInput component', () => {
    screen.getByText(/Input/);
    //screen.getByText('Input:');
    //expect(screen.getByText('Input:')).toBeInTheDocument();
  })

  test('should select the input by its role', () => {
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  })

  test('should select a label element by its text', () => {
    screen.getByLabelText('Input:')
  })

  test('should select input element by placeholder text', () => {
    screen.getByPlaceholderText('PlaceHolder')
  })

});