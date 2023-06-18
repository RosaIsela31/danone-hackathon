import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Diary from './Pages/Dairy';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

// TODO: use env variables
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://graphql.contentful.com/content/v1/spaces/9difo80fx13n',
  headers: {
    'Authorization': `Bearer ${'9Y77OAx1_qSE7xqMA86mqi2Nb6E_lh89kPscpK2w--E'}`,
  }
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/diary" element={<Diary />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
