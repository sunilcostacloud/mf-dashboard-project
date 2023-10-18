import { Switch, Route, Router } from 'react-router-dom';
import Pets from './components/Pets';

const App = ({ history }) => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route
            exact
            path="/user"
            render={(props) => (
              <Pets />
            )}
          />
          {/* <Route component={PageNotFound} /> */}
        </Switch>
      </Router>
    </div>
  )
}

export default App