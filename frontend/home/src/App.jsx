import { Switch, Route, Router } from 'react-router-dom';
import Landing from './components/Landing';
import Pricing from './components/Pricing';

const App = ({ history }) => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/pricing" component={Pricing} />
          {/* <Route component={PageNotFound} /> */}
        </Switch>
      </Router>
    </div>
  )
}

export default App