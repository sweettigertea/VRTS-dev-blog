import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Homepage from './pages/Homepage';
import ArticleDetails from './pages/ArticleDetails';
import Category from './pages/Category';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/articles/:id" element={<ArticleDetails />} />
          <Route path="/categories/:id" element={<Category />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App
