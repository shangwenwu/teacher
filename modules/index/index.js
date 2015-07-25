
	


	var nav = React.createClass({
	  render: function() {
	    return (
	    		<ul>
	    			<li>aaaa</li>
	    			<li className="active">bbbb</li>
	    			<li>cccc</li>
	    			<li>dddd</li>
	    			<li>eeee</li>
	    		</ul>
	    );
	  }
	});

	var index = React.createClass({
	  render: function() {
	  	console.log(this.props.config);
	    return (
	    	<div>
	    		<h3>index组件效果如下：</h3>
	    		<nav />
	    		<div className="head">Hello {this.props.name} <div className="nav">sssss<p>ss</p>ss</div></div>
	    	</div>
	    	)
	  }
	});

/*
	T.modulesConfig['index'] = {
			module:index,
			config:{
				title:'test页面',
				data:[0,1,2,3,4,5],
				head:require('new_head')
			}
	};
*/
	module.exports = index;

