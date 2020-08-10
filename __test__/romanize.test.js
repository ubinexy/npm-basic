import transform from 'romanize'

describe('romanize', function() {
    it('should transform', function() {
        expect(transform(10)).toEqual('X');
    });
});