
var activity = React.createClass({
	render: function() {
	    return (
			<div className="activityModule u-lof4 box boxV br5 boxHCenter">
				<p className="f18 pl20">
					活动名称：羽毛球<br />
					时间：2015年8月1日<br />
					现报名人数：21人
				</p>
				<a className="tac f16 mt20">我要报名参加</a>
			</div>
		);
	}
});

module.exports = activity;