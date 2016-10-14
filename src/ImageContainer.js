var React = require('react');
import 'whatwg-fetch';

var jsonImages = "";

/*
var ImageContainer = React.createClass({
    render: function () {
        fetch('https://api.getchute.com/v2/albums/aus6kwrg')
		  .then(function(response) {
		    return response.json();
		  }).then(function(json) {

		  		var names = [json];
		  		var namesList = names.map(function(name, index){
	            			return <li key={ index }>{name}</li>;
	          			})

		    console.log('parsed json', json);
		  }).catch(function(ex) {
		    console.log('parsing failed', ex);
		  });

        return  <ul>{ namesList }</ul>;
        
    }
});
*/



fetch('https://api.getchute.com/v2/albums/aus6kwrg')
	.then(function(response) {
	return response.json();
	}).then(function(jsonImages) {
	console.log('parsed json', jsonImages);
	}).catch(function(ex) {
	console.log('parsing failed', ex);
	});


var Hello = React.createClass({
	    render: function() {
	    	var names = [jsonImages];
	                    
	        return  (<ul>{ jsonImages }</ul>);
	    }
	});

export default Hello;

/*

var Hello = React.createClass({
	    render: function() {
	    	var names = [json];
	        var namesList = names.map(function(name, index){
	            			return <ul key={ index }>{name}</ul>;
	          			})
	                    
	        return  <ul>{ namesList }</ul>
	    }
	});

export default Hello;

*/