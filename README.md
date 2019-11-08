Text highlighter and filter component.

## How it works

This project consists of two main components, Highlighter and Filter.
To use it, you need to pass an array of highlight colors to both of these components, and also the text to apply the highlights on to the Highlighter component.

```html
  const colors = ['#e15249', '#f6d365', '#a8d08d'];
  const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

  return (
    <>
      <Highlighter colors={colors} text={text} />
      <Filter colors={colors} />
    </>
  );
```

You can then select some text on the Highlighter component and click in one of the color buttons to highlight the text with its color. This highlight will be stored using Redux, and can be viewed and filtered through the Filter component.

The Main page component uses this two components to demonstrate them, with a textarea to enter the Highlighter's text.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.
