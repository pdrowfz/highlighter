import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HighlightFilters = styled.div`
  display: flex;
  flex-direction: row;

  button + button {
    margin-left: 1rem;
  }
`;

export const FilteredHighlights = styled.ul`
  margin-top: 2rem;

  li + li {
    margin-top: 1rem;
  }
`;

export const Highlight = styled.li`
  font-size: 1.8rem;
`;
