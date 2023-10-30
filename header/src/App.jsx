import Header from "./components/header/Header"
import { Router } from 'react-router-dom';
import { useDispatch } from 'react-redux'

import { useEffect } from "react";
import { saveToken } from "./redux/features/auth/authSlice";
import PersistLogin from "./components/PersistLogin";

const App = ({ history, props }) => {

  // console.log("props", props)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(saveToken(props?.token))
  }, [props, dispatch])

  return (
    <div>
      <Router history={history}>
        <PersistLogin>
          <Header />
        </PersistLogin>
      </Router>
    </div>
  )
}

export default App