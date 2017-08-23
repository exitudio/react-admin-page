/**************
 *  Data 1
 *************/
export const data1 = [
    {
        "id": 1,
        "name": "Snapback Hat",
        "price": 100,
    },
    {
        "id": 2,
        "name": "oenoineiwi A",
        "price": 20.99,
    },
    {
        "id": 3,
        "name": "other _lph_bet",
        "price": 30,
    },
]
export const data1Hash = {
    "1":{
        "id": 1,
        "name": "Snapback Hat",
        "price": 100,
    },
    "2":{
        "id": 2,
        "name": "oenoineiwi A",
        "price": 20.99,
    },
    "3":{
        "id": 3,
        "name": "other _lph_bet",
        "price": 30,
    },
}

export const expectedDataSearchA = [
    {
        "id": 1,
        "name": "Snapback Hat",
        "price": 100,
    },
    {
        "id": 2,
        "name": "oenoineiwi A",
        "price": 20.99,
    },
]

export const expectedDataSearch100 = [
    {
        "id": 2,
        "name": "oenoineiwi A",
        "price": 20.99,
    },
    {
        "id": 3,
        "name": "other _lph_bet",
        "price": 30,
    },
]




export const expectedSortNameAscend = [
    {
        "id": 2,
        "name": "oenoineiwi A",
        "price": 20.99,
    },
    {
        "id": 3,
        "name": "other _lph_bet",
        "price": 30,
    },
    {
        "id": 1,
        "name": "Snapback Hat",
        "price": 100,
    },
]
export const expectedSortNameDescend = [
    {
        "id": 1,
        "name": "Snapback Hat",
        "price": 100,
    },
    {
        "id": 3,
        "name": "other _lph_bet",
        "price": 30,
    },
    {
        "id": 2,
        "name": "oenoineiwi A",
        "price": 20.99,
    },
]

/**************
 *  Data 2
 *************/

export const data2 = [
    {
        "id": 1,
        "name": "Snapback Hat",
        "type": "abc",
        "price": 100,
        "inventory": 16,
    },
    {
        "id": 2,
        "name": "oenoineiwi A",
        "type": "abc",
        "price": 20.99,
        "inventory": 30,
    },
    {
        "id": 3,
        "name": "other _lph_bet",
        "type": "bbb",
        "price": 30,
        "inventory": 32,
    },
]

export const expectedSortTypeAscend = [
    {
        "id": 1,
        "name": "Snapback Hat",
        "type": "abc",
        "price": 100,
        "inventory": 16,
    },
    {
        "id": 2,
        "name": "oenoineiwi A",
        "type": "abc",
        "price": 20.99,
        "inventory": 30,
    },
    {
        "id": 3,
        "name": "other _lph_bet",
        "type": "bbb",
        "price": 30,
        "inventory": 32,
    },
]
export const expectedSortPriceDescend = [
    {
        "id": 1,
        "name": "Snapback Hat",
        "type": "abc",
        "price": 100,
        "inventory": 16,
    },
    {
        "id": 3,
        "name": "other _lph_bet",
        "type": "bbb",
        "price": 30,
        "inventory": 32,
    },
    {
        "id": 2,
        "name": "oenoineiwi A",
        "type": "abc",
        "price": 20.99,
        "inventory": 30,
    },
]

export const expectedSortInventoryAscend = [
    {
        "id": 1,
        "name": "Snapback Hat",
        "type": "abc",
        "price": 100,
        "inventory": 16,
    },
    {
        "id": 2,
        "name": "oenoineiwi A",
        "type": "abc",
        "price": 20.99,
        "inventory": 30,
    },
    {
        "id": 3,
        "name": "other _lph_bet",
        "type": "bbb",
        "price": 30,
        "inventory": 32,
    },
]





/**************
 *  Data 3
 *************/
export const data3 = [
    {id:1},
    {id:2},
    {id:3},
    {id:4},
    {id:5},
    {id:6},
    {id:7},
    {id:8},
    {id:9},
    {id:10},
]

export const expectedFirstPage = [
    {id:1},
    {id:2},
    {id:3},
]
export const expectedLastPage = [
    {id:10},
]