import React from 'react';
import { render } from '@testing-library/react';
import {Main} from './Main';
import { BrowserRouter } from 'react-router-dom';



test('initializeTimes is called once useEffect is initiated', () => {
    const initializeTimesMock = jest.fn();
    jest.spyOn(React, 'useEffect').mockImplementationOnce((effect) => {
      effect();
      expect(initializeTimesMock).toHaveBeenCalledTimes(1);
    });
    render(<BrowserRouter><Main /></BrowserRouter>);
  });

