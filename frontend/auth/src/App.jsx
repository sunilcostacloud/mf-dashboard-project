import { Switch, Route, Router } from 'react-router-dom';
import SignIn from './pages/Signin';
import SignUp from './pages/SignUp';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from './redux/features/auth/authSlice';
import { useEffect } from 'react';

const App = ({ history }) => {
  const token = useSelector(selectCurrentToken);

  useEffect(() => {
    const eventData = token;
    const event = new CustomEvent('tokenEvent', {
      detail: {
        type: 'authType',
        data: eventData,
      },
    });

    window.dispatchEvent(event);
  }, [token])

  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/auth/signin" component={SignIn} />
          <Route exact path="/auth/signup" component={SignUp} />
          {/* <Route component={PageNotFound} /> */}
        </Switch>
      </Router>
    </div>
  )
}

export default App