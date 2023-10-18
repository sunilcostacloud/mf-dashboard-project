import { Switch, Route, Router } from 'react-router-dom';
import { useEffect } from 'react';
import { saveToken } from "./redux/features/auth/authSlice";
import { useDispatch } from 'react-redux'
import PersistLogin from './components/PersistLogin';
import Dashboard from './components/music/Dashboard';

const App = ({ history, props }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(saveToken(props?.token))
  }, [props, dispatch])
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route
            exact
            path="/creator"
            render={(props) => (
              <PersistLogin {...props} >
                {/* <RequireAuth {...props} allowedRoles={['Admin', 'Creator']}> */}
                <Dashboard />
                {/* </RequireAuth> */}
              </PersistLogin>
            )}
          />
          {/* <Route component={PageNotFound} /> */}
        </Switch>
      </Router>
    </div>
  )
}

export default App