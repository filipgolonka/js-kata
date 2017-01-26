# JS Kata

Kata training to improve TDD/BDD php skills

## How to use it?

### Generating new kata

run `npm run generate-random`

### Tech stack

* Jasmine
* Karma
* RequireJS

### Naming convention

* source code files should be placed in `src/` directory
* unit tests files should be places in `test/` directory
* unit tests files names should match `(.+)Spec.js` pattern

### Example code

```js

// src/fizzbuzz.js

define(function() {
    return {
        guess: function(number) {
            return number;
        }
    };
});


// test/fizzbuzzSpec.js

define(['fizzbuzz'], function(fizzbuzz) {
    describe('FizzBuzz guesser', function() {
        it('is defined', function() {
            expect(fizzbuzz).toBeDefined();
        });

        it('returns 1 for 1', function() {
            expect(fizzbuzz.guess(1)).toBe(1);
        });
    });
});


```
