import { fireEvent } from '@testing-library/react-native';
import React from 'react';
import { act } from 'react-test-renderer';
import { renderComponent } from '../../utils/testingUtils';
import LoginScreen from './index';

const mockedDispatch = jest.fn();
jest.mock('@react-navigation/native', () => ({
  StackActions: {
    replace: jest.fn(),
  },
  useNavigation: () => ({
    dispatch: mockedDispatch,
  }),
}));

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ email: 'Deja.Littel75@gmail.com' }]),
  }),
);

describe('Add Post', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('renders all UI elements', () => {
    // Arrange
    const { getByText, getByTestId } = renderComponent(<LoginScreen />);
    // Act
    const text1 = getByText('Please login to view the blog.');
    const submitButton = getByTestId('submit-button');
    // Assert
    expect(text1).toBeDefined();
    expect(submitButton).toBeDefined();
  });
  it('makes a successful API call', async () => {
    // Arrange
    const { getByTestId } = renderComponent(<LoginScreen />);
    const submitButton = getByTestId('submit-button');
    const email = 'Deja.Littel75@gmail.com';
    const url = `https://5f843a3c6b97440016f4f2dc.mockapi.io/users?search=${email}`;
    // Act
    await act(async () => {
      await fireEvent(submitButton, 'onPress');
    });
    // Assert
    expect(fetch).toBeCalledTimes(1);
    expect(fetch).toBeCalledWith(url);
  });
  it('should navigate to the the Listing page', async () => {
    const { getByTestId } = renderComponent(<LoginScreen />);
    const submitButton = getByTestId('submit-button');
    await act(async () => {
      await fireEvent(submitButton, 'onPress');
    });
    expect(mockedDispatch).toHaveBeenCalledTimes(1);
  });
});
