import { orderNumbersByWeight, getNumberWeight } from 'index';

describe('Ordering numbers by weigth', () => {
    it('Orders by weight', () => {
        const numbers = '56 65 74 100 99 68 86 180 90';
        const ordered = '100 180 90 56 65 74 68 86 99';

        expect(orderNumbersByWeight(numbers)).toEqual(ordered);
    });
    it('Orders strings of same weight', () => {
        const numbers = '90 180';
        const ordered = '180 90';

        expect(orderNumbersByWeight(numbers)).toEqual(ordered);
    });
    it('Does nothing with an empty string', () => {
        const emptyString = '';

        expect(orderNumbersByWeight(emptyString)).toEqual(emptyString);
    });
});

describe('Get number weight', () => {
    it('Gets weight of a number', () => {
        const aNumber = '56';
        const weight = 11;

        expect(getNumberWeight(aNumber)).toEqual(weight);
    });
    it('Gets 0 from an empty string', () => {
        const emptyString = '';
        const weight = 0;

        expect(getNumberWeight(emptyString)).toEqual(weight);
    });
});
