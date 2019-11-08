import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { FiFilter } from 'react-icons/fi';

import {
  Container,
  HighlightFilters,
  FilteredHighlights,
  Highlight,
} from './styles';

import { HighlightButton } from '../HighlightButton';

export default function Filter({ colors }) {
  const [activeFilters, setActiveFilters] = useState(colors);
  const highlights = useSelector(state => state.highlight);

  // Filters the stored highlights based on the selected colors
  const filteredHighlights = useMemo(() => {
    return highlights.filter(highlight =>
      activeFilters.includes(highlight.color)
    );
  }, [activeFilters, highlights]);

  // Adds or removes a color to the filters' array
  function handleFilter(color) {
    const newFilters = [...activeFilters];
    const colorIndex = newFilters.indexOf(color);

    if (colorIndex !== -1) {
      newFilters.splice(colorIndex, 1);
    } else {
      newFilters.push(color);
    }

    setActiveFilters(newFilters);
  }

  return (
    <Container>
      <span>Click on a filter to hide/show highlights of its color.</span>

      <HighlightFilters>
        {colors.map(color => (
          <HighlightButton
            key={color}
            color={color}
            onClick={() => handleFilter(color)}
            inactive={!activeFilters.includes(color)}
          >
            <FiFilter />
          </HighlightButton>
        ))}
      </HighlightFilters>
      <FilteredHighlights data-testid="highlights-list">
        {filteredHighlights.map((highlight, index) => {
          const key = `${index}-${highlight.text}-${highlight.color}`;

          return (
            <Highlight key={key}>
              <mark style={{ background: highlight.color }}>
                {highlight.text}
              </mark>
            </Highlight>
          );
        })}
      </FilteredHighlights>
    </Container>
  );
}

Filter.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};
