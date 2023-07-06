import { ApolloServer } from "apollo-server"
import typeDefs from "./typeDefs"
import resolvers from "./resolvers"
require("dotenv").config()
const mongoose = require ("mongoose ")

// Database
const db = {
host: process .env.DB_HOST,
user: process .env.DB_USER,
pass: process .env.DB_PASS,
name: process .env.DB_NAME,
}

const dbUri =
  `mongodb +srv://${db.user}:${db.pass}@${db.host}/${db.name}?retryWrites=true &w=majority`
const dbOptions = {
  useNewUrlParser : true,
  useUnifiedTopology : true,
  useFindAndModify : false,
}

mongoose
  .connect(dbUri, dbOptions )
  .then(() => console .log("Database connected "))
  .catch(error => console .log("Databased failed: ", error))

  // GraphQL
const server = new ApolloServer ({ typeDefs , resolvers })

server.listen(3000, () => {
    console.log('Servidor executando na porta 3000');
  });