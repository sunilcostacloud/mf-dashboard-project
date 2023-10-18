import { Switch, Route, Router } from 'react-router-dom';
import Landing from './components/Landing';
import Pricing from './components/Pricing';
import { useEffect } from 'react';
import { saveToken } from "./redux/features/auth/authSlice";
import { useDispatch } from 'react-redux'
import PersistLogin from './components/PersistLogin';
import RequireAuth from './components/RequireAuth';
import PageNotFound from 'page_not_found/PageNotFound';

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
            path="/"
            render={(props) => (
              <PersistLogin {...props} >
                <RequireAuth {...props} allowedRoles={['User', 'Creator', 'Admin']}>
                  <Landing />
                </RequireAuth>
              </PersistLogin>
            )}
          />
          <Route
            exact
            path="/pricing"
            render={(props) => (
              <PersistLogin {...props} >
                <RequireAuth {...props} allowedRoles={['User', 'Creator', 'Admin']}>
                  <Pricing />
                </RequireAuth>
              </PersistLogin>
            )}
          />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  )
}

export default App