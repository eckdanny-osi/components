import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';


import Avatar from './Avatar';

const imgUrl = 'http://gentlemint-media.s3.amazonaws.com/images/2012/02/16/375c182c.jpg.505x650_q85.jpg'

storiesOf('Avatars', module)
  .addDecorator(withKnobs)

  /**
   *
   */
  .add('Avatar', withInfo()(() => (
    <Avatar
      size={select('Size', ['xs', 'sm', 'md', 'lg'], 'lg')}
      imgUrl={text('imgUrl', 'https://www.famousbirthdays.com/headshots/tom-hanks-5.jpg')}
    />
  )))

  /**
   *
   */
  .add('sizes', () => (
    <div>
      <p>Extra Small</p>
      <Avatar size="xs" />
      <Avatar size="xs" imgUrl={imgUrl} />
      <p>Small</p>
      <Avatar size="sm" />
      <Avatar size="sm" imgUrl={imgUrl} />
      <p>Medium (default)</p>
      <Avatar/>
      <Avatar imgUrl={imgUrl} />
      <p>Large</p>
      <Avatar size="lg" />
      <Avatar size="lg" imgUrl={imgUrl} />
    </div>
  ));
