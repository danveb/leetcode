/* Word Break (Leetcode #139)

Problem: Given a string "str" and a list of words "words", determine if the string can be constructed from concatenating words from the list of words. A word can be used multiple times. 

Scratchpad: 

str = 'algomonster' 
words = ['algo', 'monster'] 
output = true 

                    root = [a,b,c] 
            /           |              \  
         'abc'        'bac'         'cba' 
        /  |        /       \       /     \ 
    'abc' 'acb'   'bac'    'bca'  'cba'  'cab'

Time: 

Approach: 
- WIP 

*/ 

function wordBreak(str, words) {
    // initialize a table as Array filled with "false" 
    const table = new Array(str.length + 1).fill(false) 
    // set first value of table to true 
    table[0] = true 

    // itertae over the table
    for(let i = 0; i < table.length; i++) {
        // check: if element in table is false we return false 
        if(table[i] === false) {
            continue 
        } else {
            for(let j = i + 1; j < table.length; j++) {
                // is substring in the dictionary? 
                if(words.includes(str.slice(i, j))) {
                    table[j] = true 
                }
            }
        }
    }
    return table[table.length - 1]
}