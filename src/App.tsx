import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import List from "./List";
import "./App.css";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h1>List of countries</h1>
    </div>
    <List />
  </ApolloProvider>
);

export default App;
