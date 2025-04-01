import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Homepage from './pages/Homepage';
import ArticleDetails from './pages/ArticleDetails';
import Category from './pages/Category';
import SiteHeader from './components/SiteHeader';

function App() {
  return (
    <Router>
    <div className="App">
      <SiteHeader />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/articles/:id" element={<ArticleDetails />} />
          <Route exact path="/category/:id" element={<Category />} />
        </Routes>
      
    </div>
    </Router>
  );
}

export default App
