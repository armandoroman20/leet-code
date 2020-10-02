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
            ) * Math.sign(x) // this returns it negative
        )
    };
    //
    // console.log(reverse(-543.21))



    //Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

    // Example 1:
    //
    // Input: 121
    // Output: true


    // Example 2:
    //
    // Input: -121
    // Output: false
    // Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

    // var isPalindrome = function(x) {
    //      make sure # is not negative
    //     if (x < 0) return false
    //
    //      setting reversed var
    //     let reversed = 0

    //      setting copy of x
    //     let y = x
    //
    //
    //     while (y > 0) {
    //         we do modulus 10 to
    //         const lastDigit = y % 10

    //            this is to append to the last digit
    //         reversed = (reversed * 10) + lastDigit
    //         y = (y / 10) | 0
    //     }
    //     return x === reversed
    // };
    //
    // console.log(isPalindrome(121))


    // Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
    //
    //     Symbol       Value
    // I             1
    // V             5
    // X             10
    // L             50
    // C             100
    // D             500
    // M             1000
    // For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.
    //
    // Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
    //
    //     I can be placed before V (5) and X (10) to make 4 and 9.
    // X can be placed before L (50) and C (100) to make 40 and 90.
    // C can be placed before D (500) and M (1000) to make 400 and 900.
    // Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.
    //
    // Example 1:
    //
    // Input: "III"
    // Output: 3
    // Example 2:
    //
    // Input: "IV"
    // Output: 4

    //
    // var romanToInt = function(s) {
    //     let table = {
    //         I: 1,
    //         V: 5,
    //         X: 10,
    //         L: 50,
    //         C: 100,
    //         D: 500,
    //         M: 1000
    //     }
    //
    //
    //     let result = 0;
    //     for (let i = 0; i < s.length; i++) {
    //         //if the next roman numeral is larger, then we know we have to subtract this number
    //         if (table[s[i]] < table[s[i+1]]) {
    //             result-=table[s[i]]
    //         }
    //         //otherwise, add like normal.
    //         else {
    //             result+=table[s[i]]
    //         }
    //     }
    //     return result
    // };
    //
    // console.log(romanToInt("VII"))

