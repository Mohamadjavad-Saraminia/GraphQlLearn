
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//imort apollo-client
import { ApolloClient, InMemoryCache, ApolloProvider, } from '@apollo/client';
import './index.css'

//syntax Baraye moshakhsas kardane Api/url
const client = new ApolloClient({
  uri: "https://graphqlzero.almansi.me/api",
  cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root')).render(

  //Afzoodane Clinet be provider
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>

)
