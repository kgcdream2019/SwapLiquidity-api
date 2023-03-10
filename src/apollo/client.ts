import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import fetch from 'node-fetch'

export default new ApolloClient({
  link: new HttpLink({
    fetch,
    uri: 'http://127.0.0.1:8000/subgraphs/name/swapliquidity/subgraph'
  }),
  cache: new InMemoryCache()
})
