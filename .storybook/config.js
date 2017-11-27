import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import '../src/style.scss';
import './style.scss';

const req = require.context('../src', true, /\.stories\.jsx?$/);

// const loadStories = () => { require('../stories'); };
const loadStoriesDynamic = () => req.keys().forEach(req);

const MyDecorator = (storyFn) => (
  <div style={{

  }}>{storyFn()}</div>
);

addDecorator(MyDecorator);


configure(loadStoriesDynamic, module);
