import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './layouts/Home';
import Components from './layouts/Components';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import NotFound from './layouts/NotFound';
import './App.css';

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

function App() {
  return (
    <Router history={history} basename="/mozart">
      <Navigation title="Mozart" />
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
        <Route
          path={`${process.env.PUBLIC_URL}/components`}
          component={Components}
        />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
