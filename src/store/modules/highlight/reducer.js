import produce from 'immer';

const INITIAL_STATE = [];

export default function highlight(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@highlight/ADD': {
        const { text, color } = action;

        draft.push({ text, color });
        break;
      }

      default:
    }
  });
}
