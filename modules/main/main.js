	
	var Slide = require('slide');
	var Appoint = require('appoint');
	var Recommend = require('recommend');
	var Activity = require('activity');

	var main = React.createClass({
	  render: function() {
	    return (<div>
	    	<Slide />
	    	<Appoint />
	    	<Recommend />
	    	<Activity />
    	</div>);
	  }
	});

	module.exports = main;
	
