import { configure } from '@storybook/react';
import "../src/style.scss";

const req = require.context('../src', true, /\.stories\.jsx?$/)

// const loadStories = () => { require('../stories'); };

// const loadStoriesDynamic = () => { req.keys().forEach(filename => req(filename)) };

function loadStoriesDynamic() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStoriesDynamic, module);
