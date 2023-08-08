import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import fetch from 'node-fetch'

export const blockClient = new ApolloClient({
  link: new HttpLink({
    fetch,
    uri: 'https://api.thegraph.com/subgraphs/name/matthewlilley/bsc-blocks'
    // uri: 'https://api.thegraph.com/subgraphs/name/crypto0390/blocks'
  }),
  cache: new InMemoryCache()
})
