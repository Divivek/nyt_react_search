var axios = require('axios'); 

var helper = {
	 runQuery: function(term,start,end){

	 	console.log("runQuery has been hit")
	 	var APIKey ="4fa657a739a446db8bd03f87fbeb204c";
		var QueryURL= "http://api.nytimes.com/svc/search/v2/articlesearch.json";		
		var formattedTerm = term.trim();
		var formattedStart = start.trim() + "0101";
		var formattedEnd= end.trim()+ "1231";
		console.log("Query URL " + QueryURL);

	 return axios.get(QueryURL,{
		params: {
			"api-key": APIKey,
			"q": formattedTerm,
			"begin_date":formattedStart,
			"end_date":formattedEnd
		}
			}).then(function(results){

				// var newResults = [];
				// //var fullResults = response.data.response.docs;
				// var fullResults = response.data.response;
				// //var counter = 0;

				// //Gets first 5 articles that have all 3 components
				// for(var i = 0; i < fullResults.length; i++){

				// 	// if(counter > 4) {
				// 	// 	return newResults;
				// 	// }

				// 	// if(fullResults[counter].headline.main && fullResults[counter].pub_date && fullResults[counter].web_url) {
				// 		newResults.push(fullResults[i]);
				// 		// counter++;
				// 	// }
				// }
				console.log("Axios Results", results);
				return results.data.response;
		});

	
		
//	});

},


}

module.exports = helper;