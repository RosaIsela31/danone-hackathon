import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { ErrorLink, onError } from '@apollo/client/link/error';
import Home from './Pages/Home';
import Products from './Pages/Products';
import UserProfile from './Pages/UserProfile';
// import GetProducts from './Components/GetProducts';
import Hero from './Components/Hero/Hero';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// const errorLink = onError(({ graphqlErrors, networkError }) => {
//   if (graphqlErrors) {
//     graphqlErrors.map(({ message, location, path }) => {
//       console.log(`Graphql error ${message}`);
//     });
//   }
// });

// const link = from([
//   ErrorLink,
//   new HttpLink({ uri: 'https://graphql.contentful.com/content/v1/spaces/9difo80fx13n' })
// ]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://graphql.contentful.com/content/v1/spaces/9difo80fx13n',
  headers: {
    'Authorization': `Bearer ${'9Y77OAx1_qSE7xqMA86mqi2Nb6E_lh89kPscpK2w--E'}`,
  }
});

// client.clearStore()

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/user-profile" element={<UserProfile />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
