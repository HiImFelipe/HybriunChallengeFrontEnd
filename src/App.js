import './App.css';
import {
    BrowserRouter as Router, 
    Route, 
    Switch, 
    Link, 
    Redirect
} from 'react-router-dom'

import MainPage from './pages/MainPage/index'
import notFound from './pages/PageNotFound/index'
import Login from './pages/Login/index'
import GetCookie from './components/GetCookie/GetCookie';

function App() {

  let loggedIn = false

  if(document.cookie){
    let session = GetCookie('userToken')

    console.log(session)
    loggedIn = true
  }

  return (

    <Router>
      <Switch>
        <Route exact path="/">
          {loggedIn ?  <MainPage /> : <Redirect to="/login" />} 
        </Route>
        <Route exact path="/login" component={Login}>
          {loggedIn ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route>
          {loggedIn ?  <MainPage /> : <Redirect to="/login" />} 
        </Route>
        <Route component={notFound} />
      </Switch>
    </Router>

  );
}

export default App;
