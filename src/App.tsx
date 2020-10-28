import React from "react";
import ApolloClient from "apollo-boost";
import "./App.css";

const client = new ApolloClient({
uri:"https://countries.trevorblades.com/"
});

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
       
      </header>
    </div>
  );
}

export default App;
