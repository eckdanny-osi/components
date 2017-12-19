import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import AutoAffix from 'react-overlays/lib/AutoAffix';

// import { AutoAffix } from 'react-bootstrap';
// import AutoAffix from '../../../node_modules/react-bootstrap/lib/'

class xAffixExample extends React.Component {
  getMain() {
    return this.refs.main;
  }
  render() {
    return (
      <div className="container">
        <div className="row" ref="main">
          <div className="col-md-3">
            <AutoAffix viewportOffsetTop={20} container={this.getMain}>
              <ul>
                <li>
                  <a href="#">alksdfj</a>
                </li>
                <li>
                  <a href="#">alksdfj</a>
                </li>
                <li>
                  <a href="#">alksdfj</a>
                </li>
                <li>
                  <a href="#">alksdfj</a>
                </li>
                <li>
                  <a href="#">alksdfj</a>
                </li>
                <li>
                  <a href="#">alksdfj</a>
                </li>
                <li>
                  <a href="#">alksdfj</a>
                </li>
                <li>
                  <a href="#">alksdfj</a>
                </li>
                <li>
                  <a href="#">alksdfj</a>
                </li>
              </ul>
            </AutoAffix>
          </div>
          <div className="col-md-9">
            <h3>alksdfjalksdf</h3>
            <p>alsdkjflaksdjflkasjdf</p>
            <p>alsdkjflaksdjflkasjdf</p>
            <p>alsdkjflaksdjflkasjdf</p>
            <h3>alksdfjalksdf</h3>
            <p>alsdkjflaksdjflkasjdf</p>
            <p>alsdkjflaksdjflkasjdf</p>
            <p>alsdkjflaksdjflkasjdf</p>
            <h3>alksdfjalksdf</h3>
            <p>alsdkjflaksdjflkasjdf</p>
            <p>alsdkjflaksdjflkasjdf</p>
            <p>alsdkjflaksdjflkasjdf</p>
          </div>
        </div>
      </div>
    );
  }
}

class AffixExample extends React.Component {
  render() {
    return (
      <div
        className="affix-example"
        style={{
          border: '1px solid blue',
          height: '500px',
        }}
      >
        <AutoAffix viewportOffsetTop={15} container={this}>
          <div className="panel panel-default">
            <div className="panel-body">I am an affixed element</div>
          </div>
        </AutoAffix>
      </div>
    );
  }
}

storiesOf('WTF', module).add('asdf', () => {
  return (
    <div>
      <AffixExample />
      <p>alskdfjalskdjf</p>
      <p>alskdfjalskdjf</p>
      <p>alskdfjalskdjf</p>
      <p>alskdfjalskdjf</p>
      <p>alskdfjalskdjf</p>
    </div>
  );
});
