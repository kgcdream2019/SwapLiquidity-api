import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import fetch from 'node-fetch'

export const blockClient = new ApolloClient({
  link: new HttpLink({
    fetch,
    // uri: 'http://127.0.0.1:8000/subgraphs/name/julswap/bsc-blocks'
    uri: 'https://subgraph.swapliquidity.org/subgraphs/name/julswap/bsc-blocks'
  }),
  cache: new InMemoryCache()
})
