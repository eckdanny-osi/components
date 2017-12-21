import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Checkbox as CheckboxRBS } from 'react-bootstrap';
import Checkbox from './Checkbox';

storiesOf('Checkbox', module)
  /**
   *
   */
  .add('duh', () => <Checkbox>Some Label</Checkbox>)

  .add('default', () => (
    <div>
      <div>
        <Checkbox>One</Checkbox>
        <Checkbox>Two</Checkbox>
        <Checkbox>Three</Checkbox>
        <Checkbox>Four</Checkbox>
        <Checkbox>Five</Checkbox>
      </div>
      <div className="checkbox">
        <label>
          <input type="checkbox" value="" />
          Option one is this and that&mdash;be sure to include why it's great
        </label>
      </div>
      <div className="checkbox disabled">
        <label>
          <input type="checkbox" value="" disabled />
          Option two is disabled
        </label>
      </div>
      <h4>Default</h4>
      <CheckboxRBS>One</CheckboxRBS>
      <CheckboxRBS>Two</CheckboxRBS>
      <CheckboxRBS>Three</CheckboxRBS>
      <CheckboxRBS disabled>Four</CheckboxRBS>
      <h4>
        with <tt>inline</tt>
      </h4>
      <CheckboxRBS inline>One</CheckboxRBS>
      <CheckboxRBS inline>Two</CheckboxRBS>
      <CheckboxRBS inline>Three</CheckboxRBS>
      <CheckboxRBS inline>Four</CheckboxRBS>
      <h4>My Checkbox</h4>
      <div>
        <Checkbox inline={false}>One</Checkbox>
        <Checkbox inline={false}>Two</Checkbox>
        <Checkbox inline={false}>Three</Checkbox>
        <Checkbox inline={false}>Four</Checkbox>
        <Checkbox inline={false}>Five</Checkbox>
      </div>
    </div>
  ))

  .add('inlined', () => (
    <div>
      <Checkbox inline={false}>One</Checkbox>
      <Checkbox inline={false}>Two</Checkbox>
      <Checkbox inline={false}>Three</Checkbox>
      <Checkbox inline={false}>Four</Checkbox>
      <Checkbox inline={false}>Five</Checkbox>
    </div>
  ));
