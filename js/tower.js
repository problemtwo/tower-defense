class Tower
{
	constructor(tile)
	{
		this.tile = tile;
	}
	update(game)
	{

	}
	render(game)
	{
		game._context.fillStyle = '#1a1a1c';
		game._context.beginPath();
		game._context.arc(this.tile.x+this.tile.w/2,this.tile.y+this.tile.h/2,Math.min(this.tile.w,this.tile.h)/2,0,2*Math.PI);
		game._context.closePath();
		game._context.fill();

		game._context.fillStyle = this.tile.style;
		game._context.save();
		game._context.translate(this.tile.x+this.tile.w/2,this.tile.y+this.tile.h/2);
		game._context.rotate(Math.PI);
		game._context.fillRect(0,0,this.w/2,10);
		game._context.restore();
	}
}
