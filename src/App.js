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
  console.log('APP Render ...')


  return (
    <UserProvider>
      <Router>
        <Switch>
          <div className='App'>
            <Route exact path='/login'>
              <Login />
            </Route>
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            {/* <Route exact path='/dashboard'>
              <Dashboard />
            </Route> */}
          </div>
        </Switch>
      </Router>
    </UserProvider>

  )

}

export default App;
