import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FiEdit3 } from 'react-icons/fi';

import * as HighlightActions from '~/store/modules/highlight/actions';

import { Container, HighlightColors, SelectableText } from './styles';

import { HighlightButton } from '../HighlightButton';

export default function Highlighter({ colors, text }) {
  const dispatch = useDispatch();

  function handleSelection(color) {
    const surroundElement = document.createElement('span');
    surroundElement.setAttribute('style', `background: ${color};`);

    const selection = window.getSelection();

    if (!selection.isCollapsed) {
      dispatch(HighlightActions.addHighlight(selection.toString(), color));
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
