var React= require("react");
// query component
var Query=React.createClass({
//set the intial components
	getInitialState: function() {
		return{
			search :"",
			start:"",
			end:""
		};
	},

	handleChange: function(event) {
		console.log("CHANGES IN TEXT");

		var newState={};
		newState[event.target.id] = event.target.value;
		this.setState(newState);
	},
	handleSubmit : function(event) {
		event.preventDefault();
		console.log("Clicked");
		this.props.updateSearch(this.state.search, this.state.start, this.state.end);
	},
	// render the query
	render: function() {
		return(
			<div className= "main-container">
				<div className="now">
				 <div className="col-lg-12">

				 	<div className="panel-panel-primary">
				 		<div className="panel-heading">
				 			<h1 className="panel-title">
				 			 <strong>
				 			 	{/*<i className="fa fa -newspaper-o" area hidden="true"></i>*/}This is the Query Component
				 			 </strong>
				 			</h1>
				 		</div>
				 	</div>
				 </div>
				</div>
                    <div className="panel-body">

				 {/* association of text box input with state velues*/}
				<form onSubmit={this.handleSubmit}>
				 	<div className="form-group">
				 		<h4 className=""><strong>Topic</strong></h4>
					 		<input
					 		 type="text"
					 		 value={this.state.search}
					 		 className="form-control"
					 		 id="search"
					 		 onChange={this.handleChange}
					 		 required/>

					 	<h4><strong> Start Year</strong></h4>
						 	<input 
						 	type="number"
						 	value={this.state.start}
						 	className="form-control"
						 	id="start"
						 	onChange={this.handleChange}
						 	required/>

					 	<h4><strong> End Year</strong></h4>
						 	<input 
						 	type="number"
						 	value={this.state.end}
						 	className="form-control"
						 	id="end"
						 	onChange={this.handleChange}
						 	required/>

					 	<button type="submit">submit  </button>
					 </div>
					</form>
				</div>
			</div>
			)
	}

})
module.exports= Query;

