import React from "react";
import ReactDOM from "react-dom";


import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider
} from "@apollo/client";

import App from "./App";


const httpLink = createHttpLink({
  uri: `https://api-euwest.graphcms.com/v1/ck5wca13qc9ux01fgaidt12m4/master`
});


const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  rootElement
);

