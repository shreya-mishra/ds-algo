// max sum array 

var maxSubArray = function(nums) {
    let maxSub = nums[0]; 
    let sum = 0

 for (let i = 0; i < nums.length; i++) {
   if (sum < 0) 
     sum = 0
   sum += nums[i]
   console.log(sum)
   maxSub = Math.max(maxSub, sum)
 }

 return maxSub

   
   
};



var nums = [-1,-2]

maxSubArray(nums)