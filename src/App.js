import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import ReactQueryPage from './ReactQueryPage';
import ReactQueriesPage from './ReactQueriesPage';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">홈페이지</Link>
        <Link to="/react-query">리액트 쿼리</Link>
        <Link to="/react-queries">리액트 쿼리즈</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/react-query" element={<ReactQueryPage />} />
        <Route path="/react-queries" element={<ReactQueriesPage />} />
      </Routes>
    </div>
  );
}

export default App;
