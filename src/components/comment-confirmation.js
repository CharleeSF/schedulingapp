import React from 'react';

export default class CommentConfirmation extends React.Component {
  constructor() {
    super();

    this.state = {
      showConfirmDelete: false,
      showConfirmMarkAbusive: false
    };
  }

  render() {

    let confirmNode;

    if ((this.state.showConfirmDelete && this.props.confirmDelete) || (this.state.showConfirmMarkAbusive && !this.props.confirmDelette)) {
      return (
        <span>
          <a href="" onClick={this._confirm.bind(this)}>Yes </a> - or - <a href="" onClick={this._toggleConfirmMessage.bind(this)}> No</a>
        </span>
      );
    } else {
      confirmNode = <a href="" onClick={this._toggleConfirmMessage.bind(this)}>{this.props.children}</a>;
    }

    return (
      <span>
        {confirmNode}
      </span>
    );
  }

  _toggleConfirmMessage(e) {
    e.preventDefault();

    if (this.props.confirmDelete) {
      this.setState({
        showConfirmDelete: !this.state.showConfirmDelete
      });
    } else {
      this.setState({
        showConfirmMarkAbusive: !this.state.showConfirmMarkAbusive
      });      
    }

  }

  _confirm(e) {
    e.preventDefault();
    this.setState({showConfirmMarkAbusive : false});
    this.props.onConfirm();
  }
}
