import React, { useState } from 'react';

import { FormContainer, HighlighterContainer } from './styles';

import Highlighter from '~/components/Highlighter';
import Filter from '~/components/Filter';

export default function Main() {
  const [inputText, setInputText] = useState('');
  const [text, setText] = useState('');

  const colors = ['#e15249', '#f6d365', '#a8d08d'];

  function handleInputChange(e) {
    setInputText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setText(inputText);
  }

  return (
    <>
      {text.length === 0 ? (
        <FormContainer onSubmit={handleSubmit}>
          <h1>Text Highlighter</h1>

          <textarea
            placeholder="Text to be highlighted"
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
