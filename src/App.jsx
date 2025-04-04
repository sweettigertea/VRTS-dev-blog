import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Navbar, Footer} from './components/exportComponents';
import { Homepage, Article, Category } from './pages/exportPages';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/articles/:id" element={<Article />} />
          <Route path="/categories/:id" element={<Category />} />
        </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App
