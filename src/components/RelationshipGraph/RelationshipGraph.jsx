import React from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import { timeFormat } from 'd3-time-format';
import { scaleLinear } from 'd3-scale';
import { forceSimulation } from 'd3-force';

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

  componentDidMount() {
    d3.select(this.ref)
    .append("circle")
    .attr("r", 5)
    .attr("cx", this.props.width / 2)
    .attr("cy", this.props.height / 2)
    .attr("fill", "red");
  }

  render() {
    return (
      <svg
        className="container"
        ref={(ref) => this.ref = ref}
        width={this.props.width}
        height={this.props.height}
      />
    );
  }

}


export class D3Thing extends React.Component {
  // ref: HTMLDivElement;
  // simulation: any;

  constructor(props) {
    super(props);
    this.simulation = d3.forceSimulation()
      .force("link", d3.forceLink().id(function(d) {
        return d.id;
      }))
      .force("charge", d3.forceManyBody().strength(-100))
      .force("center", d3.forceCenter(this.props.width / 2, this.props.height / 2))
      .nodes(this.props.graph.nodes);

    this.simulation.force("link").links(this.props.graph.links);
  }

  componentDidMount() {
    const node = d3.select(".nodes").selectAll("circle");
    const link = d3.select(".links").selectAll("line");

    this.simulation.nodes(this.props.graph.nodes).on("tick", ticked);

    function ticked() {
      link
        .attr("x1", function(d) {
          return d.source.x;
        })
        .attr("y1", function(d) {
          return d.source.y;
        })
        .attr("x2", function(d) {
          return d.target.x;
        })
        .attr("y2", function(d) {
          return d.target.y;
        });

      node
        .attr("cx", function(d) {
          return d.x;
        })
        .attr("cy", function(d) {
          return d.y;
        });
    }
  }

  render() {
    const { width, height, graph } = this.props;

    return (
      <svg className="container" width={width} height={height}>
        <Links links={graph.links}/>
        <Nodes nodes={graph.nodes} simulation={this.simulation}/>
      </svg>
    );
  }
}

class Links extends React.Component {
  // ref: SVGGElement;

  componentDidMount() {
    const context = d3.select(this.ref);
    context
      .selectAll("line")
      .data(this.props.links)
      .enter().append("line")
      .attr("stroke-width", function(d) {
        return Math.sqrt(d.value);
      });
  }

  render() {
    return <g className="links" ref={(ref) => this.ref = ref}/>;
  }
}

class Nodes extends React.Component {
  // ref: SVGGElement;

  componentDidMount() {
    const context = d3.select(this.ref);
    const simulation = this.props.simulation;
    const color = d3.scaleOrdinal(d3.schemeCategory20);

    context.selectAll("circle")
      .data(this.props.nodes)
      .enter().append("circle")
      .attr("r", 5)
      .attr("fill", function(d) {
        return color(d.group.toString());
      })
      .call(d3.drag()
          .on("start", onDragStart)
          .on("drag", onDrag)
          .on("end", onDragEnd))
      .append("title")
        .text(function(d) {
          return d.id;
        });

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
    return <g className="nodes" ref={(ref) => this.ref = ref}/>;
  }
}

export default RelationshipGraph;
