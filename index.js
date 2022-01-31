const express = require("express");
require('dotenv').config()
require("./config/database");
const { tokenValidation } = require("./middleware/tokenValidation");
const { rateLmiter } = require("./middleware/ratelimiter");
const fs = require("fs");
const { ApolloServer, gql } = require("apollo-server-express");
const { initDb } = require("./config/database");
initDb();
const userRoutes = require("./routes/user");
const app = express();
app.use(express.json());
const cors = require("cors"); 
app.use(
  cors({
    origin: "*",
    optionSuccessStatus: 200
  })
);

//Routes
app.use(userRoutes);

// GraphQL
const typeDefs = gql(
  fs.readFileSync("./graphql/schema.graphql", { encoding: "utf-8" })
);
const resolvers = require("./graphql/resolvers");
const apolloServer = new ApolloServer({ typeDefs, resolvers });

// tokenValidation
//Rate Limiter
app.use("/exchange", rateLmiter,tokenValidation);
apolloServer.applyMiddleware({ app, path: "/exchange" });

app.listen(process.env.PORT,process.env.HOST,()=>{
  console.log(`listening at http://${process.env.HOST}:${process.env.PORT}`)
});
