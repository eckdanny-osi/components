import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@storybook/addon-knobs';

import set from 'lodash.set';
import SimpleGraph from './SimpleGraph';

class StoryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [1, 2, 3, 4, 5],
    };
  }
  render() {
    return (
      <div>
        <form>
          <input
            type="number"
            value={this.state.data[0]}
            name="0"
            onChange={e => {
              const data = this.state.data.map(
                (d, i) => (i === 0 ? e.target.value : d)
              );
              this.setState({ data });
            }}
          />
        </form>
        <SimpleGraph data={this.state.data} size={[300, 300]} />
      </div>
    );
  }
}

storiesOf('SimpleGraph', module)
  .addDecorator(withKnobs)

  /**
   *
   */
  .add('SimpleGraph', withInfo()(() => <StoryContainer />));
