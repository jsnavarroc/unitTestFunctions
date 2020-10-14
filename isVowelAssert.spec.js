const { isVowel } = require('.');
const assert = require('assert');

let failures = 0;
console.log('isVowel return true "a" for input "a"');
try {
    assert.ok(isVowel('a'))
} catch (error) {
    console.log('FAIL');
    failures += 1;
}


console.log('isVowel return false para input "C"');
try {
    assert.equal(isVowel('c'), false)
} catch (error) {
    console.log('FAIL');
    failures += 1;
}

if (failures>0) { 
    console.error(failures);
    process.exit(1);
}
