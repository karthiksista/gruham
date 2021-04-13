import './App.css';

import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'

import Dashboard from './components/Dashboard';
import Login from './components/Login'
import PrivateRoute from './services/PrivateRoute';
import UserProvider from './services/UserProvider';

function App() {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <div className='App'>
            <Route exact path='/login'>
              <Login />
            </Route>
            <PrivateRoute exact path='/dashboard' component={Dashboard} />

          </div>
        </Switch>
      </Router>
    </UserProvider>

  )

}

export default App;
