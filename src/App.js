import logo from './logo.svg';
import './App.css';

import './scss/styles.scss';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
