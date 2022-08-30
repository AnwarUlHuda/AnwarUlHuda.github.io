//Regular Expression in JavaScript

function main()
{
	const re=regexVar();
	const s="America";

	console.log(re.test(s));
}
function regexVar()
{
	const re=new RegExp("^[aeiou]$ |^[aeiou].*?\\1$");
	//OR
	const re=/^([aeiou]).*\1$/
	return re;
}
/*
This is multi-line comment in Js.
In the above function Regular expresssion is defined which returns true
if the string satisfies the regular expression defined, else it returns false.
i.e.,
The string should start with any vowel and ends with the same vowel and any number of charactersin between.
*/