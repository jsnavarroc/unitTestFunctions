const isVowel = (chart) => {
    if (typeof chart !== 'string') { 
        throw TypeError('Arg must be a string') 
    }
    if (chart.length !== 1) { 
        throw Error('Arg no is a only one vowel') 
    }
    return 'aeiou'.includes(chart)
}
const countVowels = (str) => [...str].reduce((memo, chart) => ( 
                memo.hasOwnProperty(chart) ? { ...memo, [chart]: memo[chart] + 1 }
                    : memo
            ), { a: 0, e: 0, i: 0, o: 0, u: 0 }
);
module.exports = {
    isVowel,
    countVowels
}