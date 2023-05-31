// Merge Strings Alternatively (Leetcode #1768)

// word1 = "abc"
// word2 = "xyz"
// output = "axbycz"

// initialize newStr as empty string
// key: get the MAX length between the words
// iterate over the MAX number 
// check: if current index < word1.lenght? set newStr += word1[i]
// check: if current index < word2.lenght? set newStr += word2[i]
// return newStr

// Time: O(n) where n is length of input string 
// Space: O(n) where we build a string based on "n" strings

function merge(word1, word2) {
  let newStr = ""; 
  for(let i = 0; i < Math.max(word1.length, word2.length); i++) {
    // check: if current index < word1.length? 
    // set newStr += word1[i]
    if(i < word1.length) newStr += word1[i]; 
    // check: if current index < word2.length? 
    // set newStr += word2[i]
    if(i < word2.length) newStr += word2[i]; 
  };
  return newStr; 
};