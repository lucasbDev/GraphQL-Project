import { Schema, model } from "mongoose"

const FruitSchema = Schema({
    name: String,
    nutritions: {
    sugar: String,
    calories: String,
 },
})

export default
    model("Fruit", FruitSchema)