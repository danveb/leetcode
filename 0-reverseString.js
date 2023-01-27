/* Reverse Words

str = "hello world"
output = "world hello" 

// Brute Force Approach
- split the string into an array where we have spaces (" ")
- reverse each word
- join where we have spaces (" ")

function reverseWord(str) {
    return str.split(" ").reverse().join(" "); 
}

=== 

idx     0   1   2   3   4   5   6   7   8   9   10
str     h   e   l   l   o       w   o   r   l   d   => initialize newStr as empty string 
        i                                           => set newStr = str[i] + newStr; newStr = "h"
            i                                       => set newStr = str[i] + newStr; newStr = "eh"
                i                                   => set newStr = str[i] + newStr; newStr = "leh"
                    i                               => set newStr = str[i] + newStr; newStr = "lleh"

Optimal approach 
- reverse a string -> dlrow olleh 
- 



*/ 

// function reverseStr(str) {
//     let rev = ""; 
//     for(let i = 0; i < str.length; i++) {
//         rev = str[i] + rev; 
//     }; 
//     return rev; // dlrow olleh 
// }

function reverse(str) {
    let rev = ""; 
    for(let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }; 
    return rev; 
}

console.log(reverse("hello world")); 

// function reverseWord(str) {
//     let reverse = reverseStr(str); // dlrow olleh
//     // initialize 2 pointers that start at beginning 
//     let start = 0;
//     let end = 0; 
//     while(end < str.length) {

//     }
// }

// console.log(reverseWord("hello world")); 