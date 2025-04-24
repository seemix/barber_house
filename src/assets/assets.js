import { ApolloClient, InMemoryCache } from '@apollo/client';

export const assets =  {
    languages: ['EN', 'DK'],
    currency: 'DKK'
}

export const apolloClient = new ApolloClient({
    uri: 'https://wp.barbershouse.dk/index.php?graphql',
    cache: new InMemoryCache(),
});
