/** @jsx React.DOM */
/* jshint node: true */

'use strict';

var fmtDueCell = React.createClass({

  render: function() {

    return (
      <td className="duecell">{
        (typeof this.props.due === 'undefined') ?
          ''
        : new Date(this.props.due).toDateString()
      }</td>
    );

  }

});