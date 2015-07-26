	
	var Slide = require('slide');
	var Appoint = require('appoint');
	var Recommend = require('recommend');
	var Activity = require('activity');

	var main = React.createClass({
	  render: function() {
	    return (<div className="mainModule mt40">
	    	<div className="box">
		    	<Slide />
		    	<Appoint />
	    	</div>
	    	<h1 className="title pl10 mt40">优秀教师推荐</h1>
	    	<div className="box wrap mt10">
	    		<Recommend />
	    		<Recommend />
	    		<Recommend />
	    		<Recommend />
	    		<Recommend />
	    		<Recommend />
	    		<Recommend />
	    		<Recommend />
	    		<Recommend />
	    		<Recommend />
	    		<Recommend />
	    		<Recommend />
	    		<Recommend />
	    		<Recommend />
	    		<Recommend />
	    		<Recommend />
	    		<Recommend />
	    		<Recommend />
	    		<Recommend />
	    		<Recommend />
	    	</div>
	    	<h1 className="title pl10 mt40">教师自助活动</h1>
	    	<div className="box mt20">
	    		<Activity />
	    		<div className="flex1 ml20 box wrap">
	    			<div className="u-lof3">聚会照片</div>
	    			<div className="u-lof3">聚会照片</div>
	    			<div className="u-lof3">聚会照片</div>
	    			<div className="u-lof3">聚会照片</div>
	    		</div>
	    	</div>
	    	<div className="box mt40"></div>
    	</div>);
	  }
	});

	module.exports = main;
	
