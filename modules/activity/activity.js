
var activity = React.createClass({
	render: function() {
	    return (
			<div className="activityModule">
				<div>
					<div>名称：</div>
					<input type="text" />
				</div>
				<div>
					<div>时间：</div>
					<input type="text" />
				</div>
				<div>
					<div>地点：</div>
					<input type="text" />
				</div>
				<div>
					<div>现报名人数：</div>
					<input type="text" />
				</div>
				<div>
					<button>我要报名参加</button>
				</div>
			</div>
		);
	}
});

module.exports = activity;