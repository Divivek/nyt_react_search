var React = require("react");
// Create the Header component
var Saved = React.createClass({
  render: function() {
    return (
      <h1>I'm The Saved Component !</h1>
    );
  }
});

// Export the component back for use in other files
module.exports = Saved;

