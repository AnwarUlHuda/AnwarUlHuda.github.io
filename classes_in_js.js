function main()
{
	let triangle=new polygon([2,3,4]);
	console.log(triangle.perimeter());
}
/*
This is an example of class in JavaScript.
We have created Polygon class here, which has
	-constructor 
		&
	-perimeter() method.
*/
class Polygon
{
	constructor(array)
	{
		this.array=array;
	}
	perimeter()
	{
		let sum=0;
		for(var i=0;i<this.array.length;i++)
		{
			sum+=this.array[i];
		}
	return sum;
}