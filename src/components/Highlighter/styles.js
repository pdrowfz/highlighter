import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  span {
    margin-bottom: 2rem;
  }
`;

export const HighlightColors = styled.div`
  display: flex;
  flex-direction: row;

  button + button {
    margin-left: 1rem;
  }
`;

export const ErrorMessage = styled.div`
  margin-top: 2rem;
  color: #e15249;
`;

export const SelectableText = styled.div`
  margin-top: 2rem;
  font-size: 1.8rem;
`;
