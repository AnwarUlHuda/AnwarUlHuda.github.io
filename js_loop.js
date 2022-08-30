var a="Hello World"
var sol=print(a);
function print(s)
{
	let c=[];
	for(let letter of s)
	{
		aeiou.includes(letter) ? console.log(letter) : c.push(letter);
	}
	console.log(c.join("\n"));
}