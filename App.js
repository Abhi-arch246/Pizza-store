import './App.css';
import Nav from './Nav'
import Home from './Routes/Home'
import About from './Routes/About'
import Contact from './Routes/Contact'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">

      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />

        </Switch>
      </Router>
    </div>

  );
}

export default App;
