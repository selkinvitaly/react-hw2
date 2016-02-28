"use strict";

import React, {Component} from "react";

export default function(CustomComponent) {
  return class extends Component {

    constructor() {
      super();
      this.state = {
        showed: false
      };
    }

    hoverHandler() {
      return e => {
        this.toggleHint();
      };
    }

    toggleHint() {
      this.setState({
        showed: !this.state.showed
      });
    }

    getContainerStyle() {
      return {
        position: "relative"
      };
    }

    getHintStyle() {
      return {
        position: "absolute",
        top: 0,
        right: "-30px",
        display: this.state.showed ? "block" : "none",
        border: "1px solid #ccc",
        width: "150px",
        fontSize: 12/16 + "rem",
        padding: "5px 10px",
        borderRadius: "3px",
        background: "#f6f6f6"
      };
    }

    getHint() {
      return <p style={this.getHintStyle()}>{this.props.hint}</p>;
    }

    render() {
      return (
        <li
          onMouseEnter={this.hoverHandler()}
          onMouseLeave={this.hoverHandler()}
          style={this.getContainerStyle()}
        >
          {this.getHint()}
          <CustomComponent
            {...this.props}
          />
        </li>
      );
    }

  };
};
