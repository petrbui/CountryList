import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import List from "./List";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
});

const App = () => (
  <ApolloProvider client={client}>
    <div className='main'>
      <h1>List of countries</h1>

      <List />
    </div>
  </ApolloProvider>
);

export default App;
