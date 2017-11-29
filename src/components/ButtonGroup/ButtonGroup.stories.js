import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, ButtonGroup, ButtonToolbar } from '../';

storiesOf('ButtonGroups', module)

  /**
   *
   */
  .add('Basic Example', () => (
    <ButtonGroup>
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>
  ))

  .add('Button Toolbar', () => (
    <ButtonToolbar>
      <ButtonGroup>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button>5</Button>
        <Button>6</Button>
        <Button>7</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button>8</Button>
      </ButtonGroup>
    </ButtonToolbar>
  ))

  /**
   *
   */
  .add('Sizing', () => (
    <div>
      <ButtonToolbar>
        <ButtonGroup bsSize="large">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </ButtonToolbar>

      <ButtonToolbar>
        <ButtonGroup>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </ButtonToolbar>

      <ButtonToolbar>
        <ButtonGroup bsSize="small">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </ButtonToolbar>

      <ButtonToolbar>
        <ButtonGroup bsSize="xsmall">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </ButtonToolbar>
    </div>
  ));
