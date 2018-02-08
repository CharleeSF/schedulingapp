import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './components/comment-box';
import jQuery from 'jquery';


jQuery(function() {
  ReactDOM.render(
    <CommentBox />,
    document.getElementById('comment-box')
  );
})
