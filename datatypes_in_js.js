function main() {
    const secondInteger = readLine();
    const secondDecimal = readLine();
    const secondString = readLine();
    
    performOperation(secondInteger, secondDecimal, secondString);
}
function performOperation(secondInteger, secondDecimal, secondString) 
{
	const firstInteger = 4;
 	const firstDecimal = 4.0;
	const firstString = 'HackerRank ';
//Parse to integer datatype.
  	var secondInteger = parseInt(secondInteger);
	console.log(secondInteger+firstInteger);
//Parse to Float datatype.
	var secondDecimal = parseFloat(secondDecimal);
	console.log(secondDecimal+firstDecimal);
//second string is already in String datatype.
//Therefore no need to parse
	console.log(firstString+secondString);

/* 
 secondInteger=Number(secondInteger)+firstInteger;
 secondDecimal=Number(secondDecimal)+firstDecimal;
 console.log(secondInteger);
 console.log(secondDecimal);
 console.log(firstString+secondString)
*/
}