import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/layout/Layout';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path='about' element={<About/>}/>
              <Route path='blog' element={<Blog/>}/>
              <Route path='contact' element={<Contact/>}/>
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
