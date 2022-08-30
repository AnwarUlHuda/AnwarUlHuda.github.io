function main()
{
	const a=100;
	try
	{
		console.log(isPositive(a))
	}
	catch(e)
	{
		console.log(e.message);
	}
}
function isPositive(a)
{
	if(a>0)
	{
		return "YES"
	}
	else if (a<0)
	{
		throw new Error("Negative Error");
	}
	else if (a==0)
	{
		throw new Error("Zero Error");
	}
}