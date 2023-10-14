import './App.css';
import Header from './Header';
import Main from './Main';
import { useState } from 'react';
import Footer from './Footer';

function App() {
  const [page, setPage] = useState("Home");
  
  return (
    <div className="app">
      <Header setPage={setPage}></Header>
      <Main page={page} setPage={setPage}></Main>
      <Footer setPage={setPage}></Footer>
    </div>
  );
}

export default App;
