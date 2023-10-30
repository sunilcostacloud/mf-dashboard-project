import { Switch, Route, Router } from 'react-router-dom';
import Pets from './components/Pets';
import { useDispatch } from 'react-redux'
import { saveToken } from './redux/features/auth/authSlice';
import { useEffect } from 'react';
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
            path="/user"
            render={(props) => (
              <PersistLogin {...props} >
                <RequireAuth {...props} allowedRoles={['User', 'Creator', 'Admin']}>
                  <Pets />
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