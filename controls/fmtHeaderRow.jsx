/** @jsx React.DOM */
/* jshint node: true */

'use strict';

var fmtHeaderRow = React.createClass({

  mixins: [ window.flocksjs.member ],

  render: function() {

    return (
      <tr>
        <th></th>
        <th>Item</th>
        <th>Prio.</th>
        <th>Due date</th>
      </tr>
    );

  }

});
