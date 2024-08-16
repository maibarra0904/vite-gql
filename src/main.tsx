import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, split } from '@apollo/client';
import "bootstrap/dist/css/bootstrap.min.css"
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';



const httpLink = new HttpLink({
  uri: import.meta.env.VITE_BACKEND_URL,
})

const wsLink = new GraphQLWsLink(
  createClient({
    url: import.meta.env.VITE_BACKEND_URL
  }))

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    wsLink,
    httpLink,
  );

  const client = new ApolloClient({
    link: splitLink,
    //ssrMode: true, // Enable this to support SSR in production.
    //uri: import.meta.env.VITE_BACKEND_URL,
    cache: new InMemoryCache()
  });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
)
