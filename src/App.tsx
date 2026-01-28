import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Category } from './pages/Category';
import { Entry } from './pages/Entry';
import { Collections } from './pages/Collections';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="collections" element={<Collections />} />
          <Route path=":category" element={<Category />} />
          <Route path=":category/:id" element={<Entry />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
