/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function(word1, word2) {
    let newStr = "";
    for(let i = 0; i < Math.max(word1.length, word2.length); i++) {
        if(word1[i] !== undefined) newStr += word1[i];
        if(word2[i] !== undefined) newStr += word2[i];
    }
    return newStr;
};