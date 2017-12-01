import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { Button, ButtonGroup, ButtonToolbar } from '../';

storiesOf('ButtonGroups', module)

  .addDecorator(withKnobs)
  .add('ButtonGroup', withInfo({
    propTablesExclude: [Button]
  })(() => (
    <ButtonGroup
      vertical={boolean('vertical', false)}
      justified={boolean('justified', false)}
      block={boolean('block', false)}
    >
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>
  )))

  /**
   *
   */
  .add('sizes', () => (
    <div>
      <ButtonToolbar>
        <ButtonGroup bsSize="large">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </ButtonToolbar>
      <br />
      <ButtonToolbar>
        <ButtonGroup>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </ButtonToolbar>
      <br />
      <ButtonToolbar>
        <ButtonGroup bsSize="small">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </ButtonToolbar>
      <br />
      <ButtonToolbar>
        <ButtonGroup bsSize="xsmall">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </ButtonToolbar>
    </div>
  ));
