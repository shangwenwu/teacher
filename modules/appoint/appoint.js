
var appoint = React.createClass({
	render:function(){
		return (
			<div className="appointModule">
				<h3>订制老师</h3>
				<p>我的学习劣势</p>
				<textarea placeholder='把您的学习的障碍写下，将给你分配到适合你的老师！'></textarea>
				<input type="text" placeholder='年级' />
				<input type="text" placeholder='补习科目' />
				<input type="text" placeholder='姓名' />
				<input type="text" placeholder='手机号' />
				<button>我要订制老师</button>
			</div>
		);
	}
});

module.exports = appoint;