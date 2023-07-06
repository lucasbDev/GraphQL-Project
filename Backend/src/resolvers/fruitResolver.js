import Fruit, { find, findById, findByIdAndUpdate, findByIdAndRemove } from "../models/Fruit "
const fruitResolver = {
    Query: {
            fruits() {
            return find()
        },
            fruit(_, { id }) {
            return findById(id)
        },
},
Mutation: {
        createFruit (_, { fruit }) {
            const newFruit = new Fruit (fruit)
            return newFruit.save()
        },
            updateFruit (_, { id, fruit }) {
            return findByIdAndUpdate (id, fruit, { new: true })
        },
            deleteFruit (_, { id }) {
            return findByIdAndRemove (id)
        },
    },
}

    export default fruitResolver