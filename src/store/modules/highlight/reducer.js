import produce from 'immer';

export const INITIAL_STATE = [];

export default function highlight(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      /**
       * Adds a new highlight to the highlights' list
       */
      case '@highlight/ADD': {
        const { text, color } = action;

        draft.push({ text, color });
        break;
      }

      default:
    }
  });
}
