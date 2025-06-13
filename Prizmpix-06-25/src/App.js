import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
/* import Services from './pages/Services'; */
import About from './pages/About';
import Collaboration from './pages/Collaboration';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        {/* <Route path="/services" component={Services} /> */}
        <Route path="/about" component={About} />
        <Route path="/collaboration" component={Collaboration} />
        <Route path="/contact" component={Contact} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;