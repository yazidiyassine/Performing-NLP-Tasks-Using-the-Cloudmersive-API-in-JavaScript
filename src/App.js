import './App.css';
import Main from './components/Main';

function App() {
  const API_KEY = '736c1230-f664-499d-b145-d42c0cfaafa1';
  const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      "Apikey": API_KEY
  }; 
  return (
    <div className="App text-center">
      <div className="py-3 bg-dark text-light mb-5">
          <h1>
              Cloudmersive NLP API
          </h1>
      </div>
      <div className="row">
        <div className="col col-10 col-lg-6 col-md-8 col-sm-10 mx-auto">
          <Main headers={headers}/>
        </div>
      </div>
    </div>
  );
}

export default App;
