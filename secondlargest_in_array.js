function getSecondLargest(nums) {
    
    let largest=nums[0];
    let max=nums[0]
    for(var i=1;i<nums.length;i++)
    {
        if(max>=nums[i])
        {
            continue;
        }
        else{
            max=nums[i];
        }
    }
    for(var i=0;i<nums.length;i++)
    {
        if(nums[i]<max && nums[i]>=largest)
        {
            largest=nums[i];
        }
        else{
            continue;
        }
    }
    return largest;

	/*
	//This is using predefined Math.Max() function of JavaScript.

	var biggest=Math.max(...nums);
	
	//secondArray stores all the elements except the largest of Array.
	let secondArray=nums.filter(c=>c!=biggest);
	
	let result=Math.max(...secondArray);

	return result;

	*/
}


function main() {
    const n = readLine();
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}