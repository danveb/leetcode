/* Three Sum (Leetcode #15) 

Problem: Given an array "nums", return all triplets [nums[i], nums[j], nums[k]]
such that i !== j, i !== k, j !== k. And nums[i] + nums[j] + nums[k] === 0

nums = [-1, 0, 1, 2, -1, -4] 
output = [[-1, -1, 2], [-1, 0, 1]]

nums = [0, 1, 1]
output = []; triplets don't sum up to 0

nums = [0, 0, 0]
output = [[0, 0, 0]]

idx     0   1   2   3   4   5 
num     -1  0   1   2   -1  -4
        i   j   k               => -1 + 0 + 1 = 0; output.push([-1, 0, 1])
        i   j       k           => -1 + 0 + 2 = 1
        i   j           k       => -1 + 0 - 1 = -2
        i   j               k   => -1 + 0 - 4 = -5
        i       j   k           => -1 + 1 + 2 = 2
        i       j       k       => -1 + 1 - 1 = -1
        i       j           k   => -1 + 1 - 4 = -4
        i           j   k       => -1 + 2 - 1 = 0; output.push([-1, 2, -1])
        i           j       k   => -1 + 2 - 4 = -3
        i               j   k   => -1 -1 -4= -6
            i   j   k           => 0 + 1 + 2 = 3
            i   j       k       => 0 + 1 - 1 = 0; DUPLICATE [0, 1, -1]

Brute Force 
- perform a 3 pointer approach (i/j/k) where we calculate elements of i+j+k
- if current elements at i/j/k === 0 we output result to [] 
- issue: we have duplicates... 

Notes
- edge case: if array is empty we output [] 
- initialize output [] 
- iterate over input array once (i at 0 until end) 
- iterate over input array again (j at i + 1 until end)
- iterate over input array again (k at j + 1 until end)
- initialize sum = nums[i] + nums[j] + nums[k] 
- check: if sum === 0? 
-- we'll push [nums[i], nums[j], nums[k]] to output array 
- return output

Time: O(n^3) for nested loops; iterates 3 times over input array 
Space: O(n) we use an output array to store triplet values 

===

idx     0   1   2   3   4   5 
sort    -4  -1  -1  0   1   2
        i   j   k               => -4 -1 -1 = -6
        i   j       k           => -4 -1 + 0 = -5
        i   j           k       => -4 -1 + 1 = -4
        i   j               k   => -4 -1 + 2 = -3
        i       j   k           => -4 -1 + 0 = -5
        i       j       k       => -4 -1 + 1 = -4
        i       j           k   => -4 -1 + 2 = -3
        i           j   k       => -4 + 0 + 1 = -3
        i           j       k   => -4 + 0 + 2 = -2
        i               j   k   => -4 + 1 + 2 = -1
            i   j   k           => -1 -1 + 0 = -2
            i   j       k       => -1 -1 + 1 = -1
            i   j           k   => -1 -1 + 2 = 0; output.push([-1, -1, 2])
            i       j   k       => -1 + 0 + 1 = 0; output.push([-1, 0, 1])
            i       j       k   => -1 + 0 + 2 = 1
            i           j   k   => -1 + 1 + 2 = 2
                i   j   k       => -1 + 0 + 1 => continue 
                i   j       k   => -1 + 0 + 2 = 1
                i       j   k   => -1 + 1 + 2 = 2
                    i   j   k   => 0 + 1 + 2 = 3

Better than Brute Force? 
- Sort array in ascending order and CHECK FOR DUPLICATES
- perform a 3 pointer approach (i/j/k) 
- iterate over input array once (i at 0 until end)
- iterate over input array again (j at i + 1 until end)
- iterate over input array again (k at j + 1 until end)

Duplicate Check: make sure index is > 0 && current val is equal to previous val
--> if(i > 0 && nums[i] === nums[i - 1]) continue the loop 
--> if(j > i + 1 && nums[j] === nums[j - 1]) continue the loop
--> if(k > j + 1 && nums[k] === nums[k - 1]) continue the loop 

Notes 
- edge case: if nums array is empty we output empty [] 
- initialize output [] 
- iterate over input array once (i at 0 until end) 
--> if(i > 0 && nums[i] === nums[i - 1]) continue the loop 
- iterate over input array again (j at i + 1 until end)
--> if(j > i + 1 && nums[j] === nums[j - 1]) continue the loop
- iterate over input array again (k at j + 1 until end)
--> if(k > j + 1 && nums[k] === nums[k - 1]) continue the loop 
- initialize sum = nums[i] + nums[j] + nums[k] 
- check: if sum === 0? 
-- we'll push [nums[i], nums[j], nums[k]] to output array 
- return output

Time: O(n log n) for manual sort + O(n^3) for nested for loops = O(n^3) final
-> asymptotically O(n^3) is larger than O(n log n)
Space: O(n) where we use an output array 

function threeSum(nums) {
	// edge case: if nums array is empty? we return [] 
	if(nums.length === 0) return []; 
	// manual sort of input array 
	nums.sort((a, b) => a - b); 
	const triplets = []; 
	for(let i = 0; i < nums.length; i++) {
		if(i > 0 && nums[i] === nums[i - 1]) continue; 
		for(let j = i + 1; j < nums.length; j++) {
			if(j > i + 1 && nums[j] === nums[j - 1]) continue; 
			for(let k = j + 1; k < nums.length; k++) {
				if(k > j + 1 && nums[k] === nums[k - 1]) continue; 
				// initialize threeSum 
				let sum = nums[i] + nums[j] + nums[k]; 
				if(sum === 0) {
					triplets.push([nums[i], nums[j], nums[k]]); 
				}
			}
		}
	}; 
	return triplets; 
}

===

idx     0   1   2   3   4   5 
sort    -4  -1  -1  0   1   2
        i   L               R   => i + L + R = -3; -3 < 0 ? left++
        i       L           R   => -4 -1 + 2 = -3; -3 < 0 ? left++
        i           L       R   => -4 + 0 + 2 = -2; -2 < 0 ? left++
        i               L   R   => -4 + 1 + 2 = -1; -1 < 0 ? left++
            i   L           R   => -1 -1 + 2 = 0; output.push([-1, -1, 2])
																-> while(nums[left] === nums[left + 1]) left++
																-> while(nums[right] === nums[right - 1]) right--
            i       L       R   => -1 + 0 + 2 = 1; 1 > 0 ? right-- 
            i       L   R       => -1 + 0 + 1 = 0; output.push([-1, 0, 1])
																-> while(nums[left] === nums[left + 1]) left++
																-> while(nums[right] === nums[right - 1]) right--
                i   L       R   => i === -1 && equal to -1 before continue 
                    i   L   R   => 0 + 1 + 2 = 3

Optimal
- Sort array in ascending order and CHECK FOR DUPLICATES
- iterate over input array once (i at 0 until end)
--> if(i > 0 && nums[i] === nums[i - 1]) continue the loop 
- initialize left/right pointers that will come go up or down if sum </> 0
- keep looping while left < right 
- initialize sum = nums[i] + nums[left] + nums[right]
- check: if sum < 0 ? 
-- we increase left++ 
- check: if sum < 0 ? 
-- we decrease right--
- else: sum === 0
-- we'll push ([nums[i], nums[left], nums[right]) to output array 
-- keep looping while(nums[left] === nums[left + 1]) left++
-- keep looping while(nums[right] === nums[right - 1]) right--
-- keep moving left++/right-- pointers 
- return output [] 

Time: O(n^2) we perform 1 for loop + 1 while loop 
Space: O(n) we use. anoutput array 

*/ 

function threeSum(nums) {
    // manually sort the array that gives O(n log n) time
    nums.sort((a, b) => a - b); 
    // edge case
    if(nums.length === 0) return []; 
    const triplets = []; 
    for(let i = 0; i < nums.length; i++) {
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1; 
        let right = nums.length - 1; 
        // keep looping while left < right 
        while(left < right) {
            let sum = nums[i] + nums[left] + nums[right] 
            // case 1: sum > 0
            if(sum > 0) {
                right--
            } else if(sum < 0) {
                // case 2: sum < 0
                left++
            } else {
                // case 3: sum === 0
                triplets.push([nums[i], nums[left], nums[right]]); 
                // conditional check while any duplicates are present to left && right
                // example: [-4, 0, 0, 1, 3, 4, 4] 
                // LEFT duplicates are 0 0 
                // RIGHT duplicates are 4 4
                while(nums[left] === nums[left + 1]) left++ 
                while(nums[right] === nums[right - 1]) right--
                // continue moving pointers to look for other potential triplets
                left++
                right--
            };
        }
    }
    return triplets; 
}