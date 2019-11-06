import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: row;

    button + button {
      margin-left: 1rem;
    }
  }
`;

export const HighlightColor = styled.button.attrs(props => ({
  backgroundColor: props.color || '#aaaaaa',
}))`
  display: flex;
  height: 5rem;
  color: #000;
  border: 0;
  border-radius: 0.4rem;
  font-size: 2.5rem;
  width: fit-content;
  padding: 0 2rem;
  transition: background 0.2s;

  ${props => css`
    background: ${props.backgroundColor};

    &:hover {
      background: ${darken(0.04, props.backgroundColor)};
    }
  `}
`;

export const SelectableText = styled.div`
  margin-top: 2rem;
  font-size: 2rem;
`;
