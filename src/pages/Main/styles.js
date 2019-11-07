import styled from 'styled-components';
import { lighten } from 'polished';

export const FormContainer = styled.form`
  max-width: 48rem;
  margin: 5rem auto;

  display: flex;
  flex-direction: column;

  h1 {
    margin: 0 auto 2rem;
  }

  textarea {
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 0.4rem;
    height: 20rem;
    padding: 1rem 2rem;
    resize: none;
    margin-bottom: 2rem;
  }

  button {
    display: flex;
    height: 5rem;
    background: #213e7f;
    color: #ffffff;
    border: 0;
    border-radius: 0rem;
    font-size: 1.8rem;
    width: fit-content;
    padding: 0 2rem;
    margin: 0 auto;
    transition: background 0.2s;

    &:hover {
      background: ${lighten(0.05, '#213e7f')};
    }
  }
`;

export const HighlighterContainer = styled.div`
  max-width: 96rem;
  margin: 5rem auto;

  display: flex;
  flex-direction: column;

  hr {
    border: 0;
    height: 0.1rem;
    background: rgba(0, 0, 0, 0.3);
    margin: 3rem 0;
  }
`;
