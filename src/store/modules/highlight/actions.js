export function addHighlight(text, color) {
  return {
    type: '@highlight/ADD',
    text,
    color,
  };
}
