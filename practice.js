    // Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
    //
    // You may assume that each input would have exactly one solution, and you may not use the same element twice.
    //
    // You can return the answer in any order.
    // EXAMPLE
    // Input: nums = [2,7,11,15], target = 9
    // Output: [0,1]
    // Output: Because nums[0] + nums[1] == 9, we return [0, 1].

    // var twoSum = function(nums, target){
    //     var result = [];
    //
    //     for (var i = 0; i < nums.length; i++) {
    //         for (var j = i + 1; j < nums.length; j++) {
    //             if (nums[i] + nums[j] === target) {
    //                 result.push(i);
    //                 result.push(j);
    //             }
    //         }
    //     }
    //     return result;
    // }
    // console.log(twoSum([2, 7, 11, 15], 9));


// Given a 32-bit signed integer, reverse digits of an integer.

    //Example 1:
    //
    // Input: 123
    // Output: 321
    // Example 2:
    //
    // Input: -123
    // Output: -321

    var reverse = function(x) {
        return (
            parseFloat(
                x
                    .toString()
                    .split('')
                    .reverse()
                    .join('')
            ) * Math.sign(x)
        )
    };

    console.log(reverse(-543.21))
