const twoSum = (nums, target) => {
	let indexOf = {};

    for(let i = 0; i < nums.length; i++) {

        let complement = target - nums[i] ;

        if (complement in indexOf) {
            return [indexOf[complement], i];
        }

        indexOf[nums[i]] = i;
    }

};


console.log(twoSum([2,5,5,11], 10));