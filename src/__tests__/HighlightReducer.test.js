import reducer, { INITIAL_STATE } from '~/store/modules/highlight/reducer';
import * as HighlightActions from '~/store/modules/highlight/actions';

describe('Highlights reducer', () => {
  it('ADD', () => {
    const state = reducer(
      INITIAL_STATE,
      HighlightActions.addHighlight('Lorem', '#e15249')
    );

    expect(state).toStrictEqual([
      {
        text: 'Lorem',
        color: '#e15249',
      },
    ]);
  });

  it('DEFAULT', () => {
    const state = reducer(undefined, {});

    expect(state).toStrictEqual(INITIAL_STATE);
  });
});
