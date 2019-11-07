import React from 'react';
import PropTypes from 'prop-types';
import { FiEdit3 } from 'react-icons/fi';

import { Container, HighlightColors, SelectableText } from './styles';

import { HighlightButton } from '../HighlightButton';

export default function Highlighter({ colors, text }) {
  function handleSelection(color) {
    const surroundElement = document.createElement('span');
    surroundElement.setAttribute('style', `background: ${color};`);

    const selection = window.getSelection();

    if (!selection.isCollapsed) {
      console.tron.log(
        `Selection: "${selection.toString()}" highlighted with color "${color}".`
      );
      selection.getRangeAt(0).surroundContents(surroundElement);
      selection.empty();
    }
  }

  return (
    <Container>
      <HighlightColors>
        {colors.map(color => (
          <HighlightButton
            key={color}
            color={color}
            onClick={() => handleSelection(color)}
          >
            <FiEdit3 />
          </HighlightButton>
        ))}
      </HighlightColors>
      <SelectableText>{text}</SelectableText>
    </Container>
  );
}

Highlighter.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  text: PropTypes.string,
};

Highlighter.defaultProps = {
  text: '',
};
