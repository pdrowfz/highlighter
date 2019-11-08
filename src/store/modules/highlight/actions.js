/**
 * Adds a new highlight to the highlights' list
 */
export function addHighlight(text, color) {
  return {
    type: '@highlight/ADD',
    text,
    color,
  };
}
