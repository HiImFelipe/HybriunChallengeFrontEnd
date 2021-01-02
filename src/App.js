import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router, 
    Route, 
    Switch, 
    Link, 
    Redirect
} from 'react-router-dom'

import mainPage from './pages/MainPage/index'
import notFound from './pages/PageNotFound/index'
import login from './pages/Login/index'

function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={mainPage} />
        <Route exact path="/login" component={login}/>
        <Route component={notFound} />
      </Switch>
    </Router>

  );
}

export default App;
