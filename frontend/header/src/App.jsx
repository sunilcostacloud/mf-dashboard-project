import Header from "./components/header/Header"
import { Router } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { saveToken } from "./redux/features/tokenSlice";
import { useEffect } from "react";

const App = ({ history, props }) => {
  // console.log("props", props)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(saveToken(props?.token))
  }, [props, dispatch])

  return (
    <div>
      <Router history={history}>
        <Header />
      </Router>
    </div>
  )
}

export default App