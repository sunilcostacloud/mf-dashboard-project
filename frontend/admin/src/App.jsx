import { Switch, Route, Router } from 'react-router-dom';
import { useEffect } from 'react';
import { saveToken } from "./redux/features/auth/authSlice";
import { useDispatch } from 'react-redux'
import PersistLogin from './components/PersistLogin';
import Users from './components/users/Users';
import EditUser from './components/users/EditUser';
import RequireAuth from './components/RequireAuth';

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
            path="/admin"
            render={(props) => (
              <PersistLogin {...props} >
                <RequireAuth {...props} allowedRoles={['Admin']}>
                  <Users />
                </RequireAuth>
              </PersistLogin>
            )}
          />

          <Route
            exact
            path="/admin/:id"
            render={(props) => (
              <PersistLogin {...props} >
                <RequireAuth {...props} allowedRoles={['Admin']}>
                  <EditUser />
                </RequireAuth>
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