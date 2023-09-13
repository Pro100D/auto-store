import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';

const FavoritePage = lazy(() => import('pages/FavoritePage/FavoritePage'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('pages/CatalogPage/CatalogPage'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
      </Route>
    </Routes>
  );
}

export default App;
