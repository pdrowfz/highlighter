import React from 'react';
import PropTypes from 'prop-types';
import { FiEdit3 } from 'react-icons/fi';

import { Container, HighlightColor, SelectableText } from './styles';

export default function Highlighter({ text }) {
  function handleSelection(color) {
    const surroundElement = document.createElement('span');
    surroundElement.setAttribute('style', `background: ${color};`);

    const selection = window.getSelection();

    if (!selection.isCollapsed) {
      selection.getRangeAt(0).surroundContents(surroundElement);
      selection.empty();
    }
  }

  return (
    <Container>
      <div>
        <HighlightColor
          color="#e15249"
          onClick={() => handleSelection('#e15249')}
        >
          <FiEdit3 />
        </HighlightColor>
        <HighlightColor
          color="#f6d365"
          onClick={() => handleSelection('#f6d365')}
        >
          <FiEdit3 />
        </HighlightColor>
        <HighlightColor
          color="#a8d08d"
          onClick={() => handleSelection('#a8d08d')}
        >
          <FiEdit3 />
        </HighlightColor>
      </div>
      <SelectableText>{text}</SelectableText>
    </Container>
  );
}

Highlighter.propTypes = {
  text: PropTypes.string,
};

Highlighter.defaultProps = {
  text: '',
};
