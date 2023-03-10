/* Max Number of Words Found in Sentences (Leetcode #2114) 

Problem: Given an array of strings "sentences", where sentences[i] is a 
single sentence, return max number of words that appear in single sentence. 

sentence = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]; 
output = 6; 3rd sentence has the most words

1. Brute Force 
- we are going to loop over "sentence" array of strings
- at each iteration we can count number of words -> HELPER FUNCTION 
- check: if maxCount > count? we'll set count as maxCount
- return maxCount 

Approach
    1) main function
    - edge case: if sentences array is empty? return 0
    - initialize maxCount at -Infinity... ANY NUMBER GREATER THAN maxCount will become maxCount 
    - iterate over input array 
    - instantiate helper function for currentWordCount 
    - check: if currentWordCount > maxCount? maxCount = wordCount
    - return maxCount 

    2) countWord(str) 
    - initialize count at 1 (already empty string counts it as 1 word)
    - iterate over input string (i at 0 until end) 
    - check: if current element is " " (empty str) we know it's a word...
    -- we'll increase count by 1 now
    - return count

Time: O(n) 
Space: O(1) 

*/ 

function mostWordsFound(sentences) {
    if(sentences.length === 0) return 0; 
    let maxWordCount = -Infinity; 
    for(let i = 0; i < sentences.length; i++) {
        let currentWordCount = wordCount(sentences[i]); 
        // check: 
        if(currentWordCount > maxWordCount) {
            maxWordCount = currentWordCount; 
        }
    }; 
    return maxWordCount; 
}

function wordCount(str) {
    if(str.length === 0) return 0;
    let count = 1;
    for(let i = 0; i < str.length; i++) {
        if(str[i] === " ") {
            count += 1; 
        };
    };
    return count; 
}