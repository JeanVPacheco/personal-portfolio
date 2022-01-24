import { useEffect } from 'react';
import './App.css';
import { Header, About, Skills, Work, Footer } from './Components/';

function App() {
  useEffect(() => {
    document.title = 'JeanVPacheco';
  }, []);
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Work />
      <Footer />
    </>
  );
}

export default App;
