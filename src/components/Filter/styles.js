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
