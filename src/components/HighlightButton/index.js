import styled, { css } from 'styled-components';
import { darken } from 'polished';

/**
 * Button to be used as highlight color selection or filter
 */
export const HighlightButton = styled.button.attrs(props => ({
  backgroundColor: props.color || '#aaaaaa',
  inactive: props.inactive || false,
}))`
  display: flex;
  height: 5rem;
  color: #000000;
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

  ${props =>
    props.inactive &&
    css`
      border: 1px solid ${props.backgroundColor};
      background: #ffffff;
      color: ${props.backgroundColor};

      &:hover {
        color: #ffffff;
      }
    `}
`;
