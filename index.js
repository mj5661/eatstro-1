import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { registerRootComponent } from 'expo'
import { useFonts } from 'expo-font'
import { Tabbar } from './src/navigation/Tabs'

// Initialize Apollo Client
const client = new ApolloClient({
    uri: 'https://mockend.com/lakhanmandloi/fake-api/graphql',
    cache: new InMemoryCache(),
})

const App = () => {
    const [loaded] = useFonts({
        DMSans: require('./src/assets/fonts/DMSans-Medium.ttf'),
        Abel: require('./src/assets/fonts/Abel-Pro.otf'),
    })

    if (!loaded) {
        return null
    }

    return (
        <ApolloProvider client={client}>
            <Tabbar />
        </ApolloProvider>
    )
}

registerRootComponent(App)
