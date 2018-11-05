describe('split', function() {
    it('able to split array into 2 arrays', function(){
        expect(split([-40,-100,1,50,5,6])).toEqual([[-40,-100,1],[50,5,6]]);  // even number case
        expect(split([2,4,1,56,3])).toEqual([[2,4], [1,56,3]]);
    })
})

describe('merge', function() {
    it('able to merge 2 sorted arrays into one sorted array', function(){
        expect(merge([-40,-100,1],[50,5,6])).toEqual([-100,-40,1,5,6,50]);  // even number case
        expect(merge([2,4],[23,56,3])).toEqual([2,3,4,23,56]);
    })  
})
describe('mergSort', function() {
    

});