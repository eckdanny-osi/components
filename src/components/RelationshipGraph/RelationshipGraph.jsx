import React from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import { timeFormat } from 'd3-time-format';
import { scaleLinear } from 'd3-scale';

const propTypes = {};

const defaultProps = {};

const RelationshipGraph = ({

}) => {
  return (
    <h3>RelationshipGraph</h3>
  );
};

RelationshipGraph.propTypes = propTypes;
RelationshipGraph.defaultProps = defaultProps;

export class LineChart extends React.Component {

  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    chartId: PropTypes.string
  };

  static defaultProps = {
    width: 800,
    height: 300,
    chartId: 'v1_chart'
  }

  constructor(props) {
    super(props);
    this.state = {
      width:this.props.width
    }
  }

  render() {

    const margin = {top: 5, right: 50, bottom: 20, left: 50};
    const w = this.state.width - (margin.left + margin.right);
    const h = this.props.height - (margin.top + margin.bottom);

    const transform='translate(' + margin.left + ',' + margin.top + ')';

    return (
      <div>
        <h3>Hello from d3</h3>
        <svg id={this.props.chartId} width={this.state.width} height={this.props.height}>
          <g transform={transform}>
            <circle cx="25" cy="25" r="25" fill="purple" />
            <circle cx="75" cy="100" r="25" fill="purple" />
            <circle cx="25" cy="25" r="25" fill="purple" />
          </g>
        </svg>
      </div>
    );
  }
}

export default RelationshipGraph;
