import SideMenu from "./components/sidebar/SideMenu"
import { Router } from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch } from 'react-redux'
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
          <SideMenu />
        </PersistLogin>
      </Router>
    </div>
  )
}

export default App