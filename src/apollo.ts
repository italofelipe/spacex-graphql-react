import ApolloClient from "apollo-boost";
import { LAUNCHES_PAST_QUERY } from "./graphql/launches";

const uri = process.env.REACT_APP_API_URL;
const client = new ApolloClient({
  uri,
});

client
  .query({
    query: LAUNCHES_PAST_QUERY,
  })
  .then((res) => console.log("Launches", res))
  .catch((err) => console.log("Deu pau", err));

export { client };
