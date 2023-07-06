import { gql } from "apollo-server"

const query = gql`
type Query {
fruits: [Fruit]
fruit(id: ID!): Fruit
}
`
export default query