import {shiftChars} from '../../src/character-shifter/';
import test from 'ava';

test('should shift a lower-case character under `m`', t => {
    t.is(shiftChars('abc'), 'nop');
});

test('should shift a lower-case character over `m`', t => {
    t.is(shiftChars('stu'), 'fgh');
});

test('should shift a upper-case character under `M`', t => {
    t.is(shiftChars('ABC'), 'NOP');
});

test('should shift a upper-case character over `M`', t => {
    t.is(shiftChars('STU'), 'FGH');
});

test('should throw an error if a non-alphabetical character is passed in', t => {
    t.throws(() => {
        shiftChars('!!!')
    }, 'invalid character present');
});
