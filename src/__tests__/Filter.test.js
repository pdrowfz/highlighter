import React from 'react';
import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import Filter from '~/components/Filter';

jest.mock('react-redux');

describe('Filter component', () => {
  it('should render all highlights with all filters on', () => {
    useSelector.mockImplementation(cb =>
      cb({
        highlight: [
          {
            text: 'Lorem',
            color: '#e15249',
          },
          {
            text: 'ipsum',
            color: '#f6d365',
          },
          {
            text: 'dolor',
            color: '#a8d08d',
          },
        ],
      })
    );

    const colors = ['#e15249', '#f6d365', '#a8d08d'];

    const { getByTestId, getByText } = render(<Filter colors={colors} />);

    expect(getByTestId('highlights-list')).toContainElement(getByText('Lorem'));
    expect(getByTestId('highlights-list')).toContainElement(getByText('ipsum'));
    expect(getByTestId('highlights-list')).toContainElement(getByText('dolor'));
  });

  it('should not render highlights with all filters off', () => {
    useSelector.mockImplementation(cb =>
      cb({
        highlight: [
          {
            text: 'Lorem',
            color: '#e15249',
          },
          {
            text: 'ipsum',
            color: '#f6d365',
          },
          {
            text: 'dolor',
            color: '#a8d08d',
          },
        ],
      })
    );

    const colors = [];

    const { getByTestId } = render(<Filter colors={colors} />);

    expect(getByTestId('highlights-list')).toBeEmpty();
  });
});
