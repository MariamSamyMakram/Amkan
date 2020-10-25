// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// slick slider
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './i18n';

// style
import './App.scss';

// pages
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
