
var appoint = React.createClass({
	render:function(){
		return (
			<div className="appointModule u-lof4 box boxV ml20">
				<h2>订制老师</h2>
				<textarea className="flex1 mt10 " placeholder='把您的学习的障碍写下，将给你分配到适合你的老师！'></textarea>
				<input  className="mt10" type="text" placeholder='年级' />
				<input  className="mt10"  type="text" placeholder='补习科目' />
				<input  className="mt10"  type="text" placeholder='姓名' />
				<input  className="mt10"  type="text" placeholder='手机号' />
				<a className="mt10 tac f16" >我要订制老师</a>
			</div>
		);
	}
});

module.exports = appoint;