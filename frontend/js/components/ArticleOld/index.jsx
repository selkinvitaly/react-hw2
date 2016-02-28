"use strict";

import React, {PropTypes} from "react";
import Comments from "../Comments/";
import mixinToggle from "../../mixins/toggleArticle/";
import mixinHint from "../../mixins/hintArticle/";

const Article = React.createClass({

  mixins: [mixinToggle, mixinHint],

  selectHandler() {
    return e => {
      e.preventDefault();
      this.props.selectHandler();
    };
  },

  getSelectedStyle() {
    return this.props.selected ? { color: "brown" } : null;
  },

  getShowedStyle() {
    return this.state.showed ? null : { display: "none" };
  },

  getTitle() {
    return this.props.article.title;
  },

  getBody() {
    return this.props.article.body;
  },

  getComments() {
    return <Comments comments={this.props.article.comments || []} />;
  },

  render() {
    return (
      <li
        style={{position: "relative"}}
        onMouseEnter={this.hoverHandler()}
        onMouseLeave={this.hoverHandler()}
      >
        <h2 onClick={this.toggleHandler()} style={this.getSelectedStyle()}>
          {this.getTitle()}
        </h2>
        {this.getHint()}
        <div style={this.getShowedStyle()}>
          <p>{this.getBody()}</p>
          <p><a onClick={this.selectHandler()} href="#">select</a></p>
          {this.getComments()}
        </div>
      </li>
    );
  }

});

Article.propTypes = {
  article: PropTypes.object,
  hint: PropTypes.string,
  selectHandler: PropTypes.func,
  selected: PropTypes.bool
};

export default Article;
