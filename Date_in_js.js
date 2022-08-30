function main()
{
	var date=new Date();
	let days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	let months=['January','February','March','April','May','June','July','August','September','October','November','December'];
	var day=date.getDay();
	var dt=date.getDate();
	var mon=date.getMonth();
	var year=date.getFullYear();
	console.log("Today's date is:"+dt);
	console.log("Today is:"+days[day]);
	console.log("Current month is:"+months[mon]);
	console.log("Current year is:"+year);
	console.log("Current time is:"+date.toLocaleTimeString());
	console.log("The minutes are:"+date.getMinutes());
}