import * as trimAPI from './trimAPI'


describe('trim API', () => {
    function testFunction(originalData, expectedData) {
        expect(trimAPI.sumAllData(originalData)).toEqual(expectedData)
    }

    it('should sum to one object', () => {
        testFunction(
            [
                [
                    {
                        name: 'aaa',
                        d: 'd'
                    }
                ], [
                    {
                        name: 'aaa',
                        c: 'c'
                    }
                ]
            ],
            {
                name: 'aaa',
                d: 'd',
                c: 'c'
            }
        )

        testFunction(
            [
                [
                    {
                        name: 'aaa',
                        d: 'd'
                    }
                ], [
                    {
                        name: 'bbb',
                        c: 'c'
                    }
                ]
            ],
            {
                name: 'bbb',
                d: 'd',
                c: 'c'
            }
        )

    })
})