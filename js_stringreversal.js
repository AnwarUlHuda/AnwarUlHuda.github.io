var a="hello";
val=reverseString(a);
console.log(val);
function reverseString(s)
{
	try {
		if(typeof s === "string" && typeof s !== "number")
		{
			let sol=s.split("").reverse().join("");
			console.log(sol);
		}
		else
		{
			console.log("s.split is not a function");
			console.log(s);
		}
	}
	catch(error) {
		console.log("Error message: "+ error);
	}
}
