/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// nums = [2,7,11,15], target = 9
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length ; i++) {
        let subnums = nums.slice(i+1)
        for (let j = 0;  j < subnums.length ; j++) {
            let sum = nums[i] + subnums[j];
            if (sum === target) {
                console.log(target)
                console.log(nums)
                console.log(i,j+i+1)
                // return [nums[i], subnums[j]]
                return [i, j+i+1]
            }
        }

    }
};
// [3,3], target = 6
console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))
console.log(twoSum([3,5,2,6,8,9], 14))