
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Quizz from './components/Quizz';
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  
  return (
    <div className="App">
      <Header />
      <Quizz />
      <Footer />
    </div>
  );
}

export default App;
