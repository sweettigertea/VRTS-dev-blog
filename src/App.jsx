import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Navbar, Footer } from "./components/exportComponents";
import { Homepage, Article, Category } from "./pages/exportPages";
// import useFetch from './hooks/useFetch';

function App() {
  // let {loading, error, data} = useFetch('http://172.27.72.25:1337/api/articles?populate=*')
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Errorrr...</p>;
  // if (!data) return null;

  const client = new ApolloClient({
    uri: "http://172.27.72.25:1337/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/articles/:documentId" element={<Article />} />
            <Route path="/categories/:documentId" element={<Category />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
// ArticlesTest={data?data:'nullarino'}
