import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Navbar, Footer} from './components/exportComponents';
import { Homepage, Article, Category } from './pages/exportPages';
import useFetch from './hooks/useFetch';

function App() {

  let {loading, error, data} = useFetch('http://172.27.72.25:1337/api/articles?populate=*')
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Errorrr...</p>;
  if (!data) return null;
  
  return (
    <Router>
    <div className="App">
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage ArticlesTest={data?data:'nullarino'}/>} />
          <Route path="/articles/:id" element={<Article ArticlesTest={data?data:'nullarino'}/>} />
          <Route path="/categories/:id" element={<Category />} />
        </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App
