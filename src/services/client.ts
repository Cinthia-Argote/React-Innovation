import ApolloClient, {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from "apollo-boost";

import introspectionQueryResultData from "./fragmentTypes.json";

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
});

const cache = new InMemoryCache({ fragmentMatcher });

export const setup = (): any => {
  const client = new ApolloClient({
    uri: process.env.REACT_APP_ACTIVITIES_API,
    cache,
  });
  return client;
};
