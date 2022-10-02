/* Move Zeroes to Beginning of Array

Problem: Given an array "nums", move all zeros to the left while maintining the order of other elements. 

nums = [1, 10, 20, 0, 59, 63, 0, 88] 
output = [0, 0, 0, 1, 10, 20, 59, 63, 88] 

idx     0   1   2   3   4   5   6   7   8
num     1   10  20  0   9   6   0   8   0
                                        F/S => fast/slow pointers start at end of array
                                    F   S   => F !== 0; so we'll make a swap: F = 0; S = 8; slow-- 

                            6   0   0   8
                                F   S       => F === 0; keep moving fast
                            F       S       => F !== 0; swap; F = 0; S = 6; slow--

                        9   0   0   6   8
                        F       S           => F !== 0; swap; F = 0; S = 9; slow--

                20  0   0   0   9   6   8
                    F       S               => F === 0; keep moving fast
                F           S               => F !== 0; swap; F = 0; S = 20; slow--

            10  0   0   0   20  9   6   8
            F           S                   => F !== 0; swap; F = 0; S = 10; slow--
        1   0   0   0   10  20  9   6   8
        F           S                       => F !== 0; swap; F = 0; S = 1; slow--
        
        0   0   0   1   10  20  9   6   8   => we return this modified in-place array


Approach: based on our array since we're moving all zeros to left we will try to loop over the input array once; starting from the end to the front. if the current element is a 0 we should make a swap with the next element. 

- initialize slow pointer at end of array 
- iterate over input array "backwards" starting from the end until >= 0 
- check: if "fast" pointer DOES NOT equals 0 we'll make a swap -> temp = fast; fast = slow; slow = temp; decrease slow-- 
- return array  

Time: O(n) where n is # of elements visited in array 
Space: O(1) on constant time

*/

function moveZerosToLeft(nums) {
    let slow = nums.length - 1; 
    for(let fast = nums.length - 1; fast >= 0; fast--) {
        if(nums[fast] !== 0) {
            let temp = nums[fast] 
            nums[fast] = nums[slow]; 
            nums[slow] = temp; 
            slow-- 
        }
    }
    return nums; 
}