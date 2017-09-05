// Include React
var React = require("react");
var Router=require('react-router');

var helpers = require('../../utils/helpers');

// Creating the Results component
var Results = React.createClass({
  // Here we render the function
      getInitialState:function(){
            return{ arrayofArticles:[] };
      },
        handleClick: function(item){
          console.log('Clicked');
        },

  // A helper method for mapping through our articles and outputting some HTML
  renderArticles: function() {
    return this.props.results.docs.map(function(article, index) {

     // Each article thus reperesents a list group item with a known index
      return (
        <div key={index}>
          <li className="list-group-item">
            <h3>
              <span>
                <em>{article.headline.main}</em>
              </span>
              <span className="btn-group pull-right">
                <a href={article.web_url} rel="noopener noreferrer" target="_blank">
                  <button className="btn btn-default ">View Article</button>
                </a>

               {/*
                  By using an arrow function callback to wrap this.handleClick,
                  we can pass in an article as an argument
                */}
                <button className="btn btn-primary" onClick={() => this.handleClick(article)}>Save</button>
              </span>
            </h3>
            <p>Date Published: {article.pub_date}</p>

         </li>

       </div>
      );

   }.bind(this));

 },

  // A helper method for rendering a container to hold all of our articles
  renderContainer: function() {
    return (
      <div className="main-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h1 className="panel-title">
                  <strong>
                    <i className="fa fa-list-alt"></i>
                    Results
                  </strong>
                </h1>
              </div>
              <div className="panel-body">
                <ul className="list-group">
                  {this.renderArticles()}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
      
  render: function() {
    if(!this.props.results.docs){

          return(
            <div className="main-container">
              <div className = "row">
                <div className="panel panel-primery">
                  <div className="panel-heading">
                      <h1 className= "panel-title"> <strong> <span className="glyphicon glyphicon-list.alt" aria-hidden="true"></span>Results</strong>
                       </h1>
                  </div>
                  <div className="panel-body">
                                        <h3>
                            <span className="text-center"><em>No Results yet</em></span>
                      </h3>
                            
                   </div>
                </div>
            </div>             
        </div>
          );
        }
      


      return this.renderContainer();
  
   }
});   
// Export the component back for use in other files
module.exports = Results;
