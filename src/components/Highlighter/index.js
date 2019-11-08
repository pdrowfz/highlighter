import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FiEdit3 } from 'react-icons/fi';

import * as HighlightActions from '~/store/modules/highlight/actions';

import {
  Container,
  HighlightColors,
  ErrorMessage,
  SelectableText,
} from './styles';

import { HighlightButton } from '../HighlightButton';

export default function Highlighter({ colors, text }) {
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();

  function handleSelection(color) {
    setErrorMessage('');
    const surroundElement = document.createElement('mark');
    surroundElement.setAttribute('style', `background: ${color};`);

    const selection = window.getSelection();

    if (!selection.isCollapsed) {
      try {
        selection.getRangeAt(0).surroundContents(surroundElement);
        dispatch(HighlightActions.addHighlight(selection.toString(), color));
        selection.empty();
      } catch (error) {
        setErrorMessage('You cannot select part of a previous selection.');
      }
    }
  }

  return (
    <Container>
      <span>
        Select the text to be highlighted with your mouse and click on the
        highlight color to save it.
      </span>

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
      {errorMessage.length > 0 && <ErrorMessage>{errorMessage}</ErrorMessage>}
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
