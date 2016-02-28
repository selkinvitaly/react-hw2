"use strict";

import React, {Component, PropTypes} from "react";
import Comments from "../Comments/";
import HOCtoggle from "../../HOC/toggleArticle/";
import HOChint from "../../HOC/hintArticle/";

class Article extends Component {

  selectHandler() {
    return e => {
      e.preventDefault();
      this.props.selectHandler();
    };
  }

  getSelectedStyle() {
    return this.props.selected ? { color: "brown" } : null;
  }

  getShowedStyle() {
    return this.props.showed ? null : { display: "none" };
  }

  getTitle() {
    return this.props.article.title;
  }

  getBody() {
    return this.props.article.body;
  }

  getComments() {
    return <Comments comments={this.props.article.comments || []} />;
  }

  render() {
    return (
      <div>
        <h2 onClick={this.props.toggleHandler} style={this.getSelectedStyle()}>
          {this.getTitle()}
        </h2>
        <div style={this.getShowedStyle()}>
          <p>{this.getBody()}</p>
          <p><a onClick={this.selectHandler()} href="#">select</a></p>
          {this.getComments()}
        </div>
      </div>
    );
  }

}

Article.propTypes = {
  article: PropTypes.object,
  selectHandler: PropTypes.func,
  toggleHandler: PropTypes.func,
  showed: PropTypes.bool,
  selected: PropTypes.bool
};

export default HOChint(HOCtoggle(Article));
