/* istanbul ignore */

import React from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import { timeFormat } from 'd3-time-format';
import { scaleLinear, scaleOrdinal } from 'd3-scale';
import {
  forceSimulation,
  forceLink,
  forceCenter,
  forceManyBody,
} from 'd3-force';
import { select, selectAll } from 'd3-selection';
// @todo(dce): don't use css modules b/c it breaks Jest
// import './style.scss';

export class D3Thing extends React.Component {
  constructor(props) {
    super(props);
    this._setup();
  }
  _setup() {
    this.simulation = forceSimulation()
      .force('link', forceLink().id(d => d.id))
      .force('charge', forceManyBody().strength(-100))
      .force('center', forceCenter(this.props.width / 2, this.props.height / 2))
      .nodes(this.props.graph.nodes);
    this.simulation.force('link').links(this.props.graph.links);
  }

  componentDidUpdate() {
    this.foo();
  }

  componentDidMount() {
    this.foo();
  }

  foo() {
    const node = select('.nodes').selectAll('circle');
    const link = select('.links').selectAll('line');

    this.simulation.nodes(this.props.graph.nodes).on('tick', ticked);

    function ticked() {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

      node.attr('cx', d => d.x).attr('cy', d => d.y);
    }
  }

  // componentWillUpdate() {

  // }

  render() {
    console.log(this.props.graph);
    const { width, height, graph } = this.props;

    return (
      <svg className="viz" width={width} height={height}>
        <Links links={graph.links} />
        <Nodes nodes={graph.nodes} simulation={this.simulation} />
      </svg>
    );
  }
}

class Links extends React.Component {
  // ref: SVGGElement;

  componentDidMount() {
    const context = select(this.ref);
    context
      .selectAll('line')
      .data(this.props.links)
      .enter()
      .append('line');
  }

  componentDidUpdate() {
    const context = select(this.ref);
    context
      .selectAll('line')
      .data(this.props.links)
      .enter()
      .append('line');
  }

  render() {
    return <g className="links" ref={ref => (this.ref = ref)} />;
  }
}

class Nodes extends React.Component {
  // ref: SVGGElement;

  componentDidMount() {
    const context = select(this.ref);
    const simulation = this.props.simulation;
    const color = scaleOrdinal(d3.schemeCategory20);

    context
      .selectAll('circle')
      .data(this.props.nodes)
      .enter()
      .append('circle')
      .attr('r', 5)
      .call(
        d3
          .drag()
          .on('start', onDragStart)
          .on('drag', onDrag)
          .on('end', onDragEnd)
      )
      .append('title')
      .text(d => d.id);

    function onDragStart(d) {
      if (!d3.event.active) {
        simulation.alphaTarget(0.3).restart();
      }
      d.fx = d.x;
      d.fy = d.y;
    }

    function onDrag(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    function onDragEnd(d) {
      if (!d3.event.active) {
        simulation.alphaTarget(0);
      }
      d.fx = null;
      d.fy = null;
    }
  }
  componentDidUpdate() {
    const context = select(this.ref);
    const simulation = this.props.simulation;
    const color = scaleOrdinal(d3.schemeCategory20);

    context
      .selectAll('circle')
      .data(this.props.nodes)
      .enter()
      .append('circle')
      .attr('r', 5)
      .call(
        d3
          .drag()
          .on('start', onDragStart)
          .on('drag', onDrag)
          .on('end', onDragEnd)
      )
      .append('title')
      .text(d => d.id);

    function onDragStart(d) {
      if (!d3.event.active) {
        simulation.alphaTarget(0.3).restart();
      }
      d.fx = d.x;
      d.fy = d.y;
    }

    function onDrag(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    function onDragEnd(d) {
      if (!d3.event.active) {
        simulation.alphaTarget(0);
      }
      d.fx = null;
      d.fy = null;
    }
  }

  render() {
    return <g className="nodes" ref={ref => (this.ref = ref)} />;
  }
}

export default D3Thing;
