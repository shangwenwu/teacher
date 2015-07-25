
	window.RoutersConfig = {
		'head'  : {
			module:require('head'),
			config:{
				data:['test']
			}
		},
		'main'  : {
			module:require('main'),
			config:{
				title:'主网页'
			}
		},
		'index/aa' : {
			module:require('index'),
			config:{
				title:'test页面',
				data:[0,1,2,3,4,5],
				head:require('new_head')
			}
		}
	}

	var Route = React.createClass({
	  render () {

		var hash = this.props.route,
		    len = hash.length-1,
		    Head;

	    if(hash[len] == '/'){
	    	hash = hash.substr(0,len);
	    }
	  	var Component,config,
	  		routeModule = RoutersConfig[hash];

	  	if(routeModule){
	  		Component = routeModule.module;
	  		config    = routeModule.config;
	  	}else{
	  		var main = RoutersConfig['main'];
	  		Component = main.module;
	  		config    = main.config;
	  	}

		config.key = this.props.name;
		config.val = this.props.val;
	  	
	  	if(config.head){
	  		Head = config.head;
	  	}else{
	  		Head = RoutersConfig['head'].module;
	  	}

	    return (
	      <div>
	        <Head />
	        <Component config={config} />
	      </div>
	    )

	  }
	});

	function render () {
		var route = window.location.hash.substr(1),
			k,
			v,
			routeStr = route.split('/'),
			len=routeStr.length-1;

		if(routeStr[1] && routeStr[len].split('=')[1] && routeStr[len].split('=').length == 2){
				var route='';
				routeStr.map(function(key,index){
					if(index != len){
						route += key+'/';
					}else{
						var val = key.split('=');
						k=val[0];
						v=val[1];
					}
				});
		}
		React.render(<Route route={route} name={k} val={v} />, document.body);
	}

	window.addEventListener('hashchange', render);
	render();


