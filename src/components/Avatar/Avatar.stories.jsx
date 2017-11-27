import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import Avatar from './Avatar';

const imgUrl = 'http://gentlemint-media.s3.amazonaws.com/images/2012/02/16/375c182c.jpg.505x650_q85.jpg'

storiesOf('Avatars', module)
  .addDecorator(withKnobs)

  /**
   *
   */
  .add('Avatar', () => (
    <Avatar
      size={select('Size', ['sm', 'md', 'lg'], 'md')}
      imgUrl={text('imgUrl', '')}
    />
  ))

  /**
   *
   */
  .add('sizes', () => (
    <div>
      <p>Small</p>
      <Avatar size="sm" />
      <Avatar size="sm" imgUrl={imgUrl} />
      <p>Medium (default)</p>
      <Avatar />
      <Avatar imgUrl={imgUrl} />
      <p>Large</p>
      <Avatar size="lg" />
      <Avatar size="lg" imgUrl={imgUrl} />
    </div>
  ));
