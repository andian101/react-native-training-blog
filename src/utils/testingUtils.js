import { render } from '@testing-library/react-native';
import React from 'react';
import MainContextProvider from '../context';

export function renderComponent(component) {
  return render(<MainContextProvider>{component}</MainContextProvider>);
}
