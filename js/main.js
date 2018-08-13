class Game
{
	constructor()
	{
		this.cols = 20;
		this.rows = 20;
		this.tower = new Tower(new Tile(0,0,200,200,'#6c6'));

		this._canvas = document.createElement('canvas');
		this._context = this._canvas.getContext('2d');
		document.body.appendChild(this._canvas);

		const _this = this;
		setInterval(function(){_this.render();},1000/60);
	}
	render()
	{
		this._context.clearRect(0,0,this._canvas.width,this._canvas.height);
		this.tower.render(this);
	}
}

window.onload = function()
{
	const game = new Game();
}
