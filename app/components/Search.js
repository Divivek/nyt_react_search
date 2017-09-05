// Include React
var React = require("react");
// Include React
var Query = require("./Search/Query");
var helpers = require("../utils/helpers");

var Results= require("./Search/Results");
// Create the Header component
var Search = React.createClass({
	getInitialState: function(){
		return{
			results:{}
		};
	},

	setQuery: function(newQuery,newStart, newEnd){

		 helpers.runQuery(newQuery,newStart,newEnd).then(function(data) {
		 
		 	this.setState({ results : {docs: data.docs}});

		 }.bind(this));
	},

	  render: function() {

    return (
      <div className="main-container">

      		<Query updateSearch={this.setQuery}/>
      		<Results results={this.state.results} />
      		
      		</div>
    
		);
	}
});

		// Export the component back for use in other files
		module.exports = Search;