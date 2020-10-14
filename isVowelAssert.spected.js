const { isVowel } = require('.');
const assert = require('assert');

let failures = 0;
const tests = [];
//Regiters all test 
const test = (name, fn) => { 
    tests.push({name, fn})
};

test('isVowel return true "a" for input "a"', () => { 
    assert.ok(isVowel('a'))
})
test('isVowel return false para input "C"', () => { 
    assert.equal(isVowel('c'), false)
})

tests.forEach(({ name, fn}) => { 
    console.log(name);
    try {
        fn()
    } catch (error) {
        console.error(`Expected ${error.expected} but got ${error.actual}` );
        failures += 1;
    }
})


if (failures>0) { 
    console.error(failures);
    process.exit(1);
}
