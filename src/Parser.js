var Hello = React.createClass({
	    render: function() {
	    	var names = [json];
	        var namesList = names.map(function(name, index){
	            			return <li key={ index }>{name}</li>;
	          			})
	                    
	        return  <ul>{ namesList }</ul>
	    }
	});