import './App.css';
import { useHistory } from 'react-router-dom'
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
import AddContributor from './pages/AddContributor/index'
import GetCookie from './components/GetCookie/GetCookie';
import Contributor from './pages/Contributor'

function App() {

  const history = useHistory()
  let loggedIn = false

  console.log(history)

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
          {loggedIn ? <Redirect to="/" /> : <Login history={history}/>}
        </Route>
        <Route exact path="/addcontributor">
          {loggedIn ?  <AddContributor /> : <Redirect to="/login" />} 
        </Route>
        <Route exact path="/contributor/:id">
          {loggedIn ?  <Contributor /> : <Redirect to="/login" />} 
        </Route>
        <Route component={notFound} />
      </Switch>
    </Router>

  );
}

export default App;
