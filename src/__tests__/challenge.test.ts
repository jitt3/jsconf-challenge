const c = require('../challenge');

describe('challenge', () => {
    it('resolves example from index description', () => {
        const input = '56 65 74 100 99 68 86 180 90';
        const result = c.orderByWeight(input);
        const expectedResult = '100 180 90 56 65 74 68 86 99';
        expect(result).toEqual(expectedResult);
    });

    it('returns empty when input is an empty array', () => {
        const input = '';
        const result = c.orderByWeight(input);
        expect(result).toEqual('');
    })
});
