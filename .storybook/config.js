import { configure } from '@storybook/react';

const req = require.context('../src', true, /\.stories\.jsx?$/)

// function loadStories() {
//   require('../stories');
// }

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
