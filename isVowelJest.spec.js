
const { isVowel } = require('.');

// BDD -> Behavio-driver developer.
describe('isVowel', () => { 
    it('should return true "a" for input "a"', () => { 
        expect(isVowel('a')).toBe(true)
    })
    it('shoulds return false para input "C"', () => { 
        expect(isVowel('c')).toBe(false)
    })
    
})


