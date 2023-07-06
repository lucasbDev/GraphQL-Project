import { gql } from "apollo-server"

const types = gql`
    type Fruit {
    id: ID!
    name: String
    nutritions: Nutritions
}
    type Nutritions {
    calories: String
    sugar: String
}
`
export default types