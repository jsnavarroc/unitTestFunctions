
const { it } = require('@jest/globals');
const { isVowel, countVowels } = require('.');

// BDD -> Behavior-driver developer.
describe('isVowel', () => { 
    it('debería arrojar error cuando se invoca sin string', () => { 
        expect(() => isVowel()).toThrow(TypeError);
    })
    it('debería arrojar error cuando no es legth 1', () => { 
        expect(() => isVowel('aaa')).toThrow('Arg no is a only one vowel');
    })
    it('should return true "a" for input "a"', () => { 
        expect(isVowel('a')).toBe(true)
    })
    it('shoulds return false para input "C"', () => { 
        expect(isVowel('c')).toBe(false)
    })
    
})
describe('countVowels', () => { 
    it('should ...', () => {
        expect(countVowels('abc')).toEqual({ a: 1, e: 0, i: 0, o: 0, u: 0 });
    });
})


