// Import necessary dependencies from react-router-dom and @apollo/client
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// Import custom components and pages
import { Navbar, Footer } from "./components/exportComponents";
import { Homepage, Article, Category } from "./pages/exportPages";

// Commented out import for useFetch hook (currently not in use)
// import useFetch from './hooks/useFetch';

function App() {

  const client = new ApolloClient({
    uri: "http://172.27.72.25:1337/graphql",
    cache: new InMemoryCache(),
  });

  return (
    // Wrap the App component in ApolloProvider to make the Apollo Client available to all nested components
    <ApolloProvider client={client}>
      {/* Set up routing using react-router-dom */}
      <Router>
        <div className="App">
          {/* Render the Navbar component */}
          <Navbar />
          {/* Define routes for different pages */}
          <Routes>
            {/* Homepage route */}
            <Route exact path="/" element={<Homepage />} />
            {/* Article detail page route with dynamic documentId parameter */}
            <Route path="/articles/:documentId" element={<Article />} />
             {/* Category page route with dynamic documentId parameter */}
            <Route path="/categories/:documentId" element={<Category />} />
          </Routes>
          {/* Render the Footer component */}
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

// ArticlesTest={data?data:'nullarino'}
