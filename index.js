const _ = require('lodash') 

const someArray = [7,3]

const nForEach = someArray.forEach(it => console.log(it))
const lEach = _.each(someArray, it => console.log(it))

console.log(lEach, nForEach)

const obj = {
    a: {
        name: 'John'
    },
    b: {
        name: 'Kelly'
    }
}

_.each(obj, it => console.log(it.name))