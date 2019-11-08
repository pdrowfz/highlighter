import React, { useState } from 'react';

import { FormContainer, HighlighterContainer } from './styles';

import Highlighter from '~/components/Highlighter';
import Filter from '~/components/Filter';

export default function Main() {
  const [inputText, setInputText] = useState('');
  const [text, setText] = useState('');

  /**
   * Array of colors to be used to highlight text
   */
  const colors = ['#e15249', '#f6d365', '#a8d08d'];

  function handleInputChange(e) {
    setInputText(e.target.value);
  }

  /**
   * Sets the text that feeds the Highlighter component
   */
  function handleSubmit(e) {
    e.preventDefault();

    setText(inputText);
  }

  /**
   * After some text is submitted, renders the Highlighter and Filter components
   * Before that, renders a textarea to enter text
   */
  return (
    <>
      {text.length === 0 ? (
        <FormContainer onSubmit={handleSubmit}>
          <h1>Text Highlighter</h1>

          <textarea
            placeholder="Enter here the text to be highlighted"
            value={inputText}
            onChange={handleInputChange}
          />

          <button type="submit">Highlight!</button>
        </FormContainer>
      ) : (
        <HighlighterContainer>
          <Highlighter colors={colors} text={text} />

          <hr />

          <Filter colors={colors} />
        </HighlighterContainer>
      )}
    </>
  );
}
