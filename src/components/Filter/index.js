import React from 'react';
import PropTypes from 'prop-types';
import { FiFilter } from 'react-icons/fi';

import { Container, HighlightFilters } from './styles';

import { HighlightButton } from '../HighlightButton';

export default function Filter({ colors }) {
  function handleFilter(color) {
    console.tron.log(`Filtering color "${color}"`);
  }

  return (
    <Container>
      <HighlightFilters>
        {colors.map(color => (
          <HighlightButton
            key={color}
            color={color}
            onClick={() => handleFilter(color)}
          >
            <FiFilter />
          </HighlightButton>
        ))}
      </HighlightFilters>
    </Container>
  );
}

Filter.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};
