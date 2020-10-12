const { isVowel } = require('.');
let failures = 0;
console.log('isVowel retun "a" for input "a"');
if (isVowel('a') === true) {
    console.log('Ok');
} else { 
    console.log('FAIL');
    failures += 1;
}

console.log('isVowel return false para input "C"');
if (isVowel('c') === false) {
    console.log('Ok');
} else { 
    console.log('FAIL');
    failures += 1;
}

if (failures>0) { 
    console.error(failures);
    process.exit(1);
}
