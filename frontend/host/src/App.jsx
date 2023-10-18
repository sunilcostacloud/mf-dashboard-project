import { lazy, Suspense, useState } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Progress from './components/Progress';
import { useSelector, useDispatch } from 'react-redux'
import UnAuthorized from './components/UnAuthorized';
import { saveToken } from './redux/features/auth/authSlice';
const AuthLazy = lazy(() => import('./components/AuthApp'));
const HomeLazy = lazy(() => import('./components/HomeApp'));
const HeaderLazy = lazy(() => import('./components/HeaderApp'));
const SideMenuLazy = lazy(() => import('./components/SideMenuApp'));

const App = () => {
  const dispatch = useDispatch()

  const { token } = useSelector(state => state.auth);

  const { pathname } = useLocation();

  const [show, setShow] = useState(true);

  useEffect(() => {
    if (pathname.toLowerCase() == "/auth/signin" || pathname.toLowerCase() == "/auth/signup" || pathname.toLowerCase() == "/unauthorized") {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [pathname])

  useEffect(() => {
    const handleEvent = (event) => {
      if (event.detail.type === 'authType') {
        dispatch(saveToken(event.detail.data))
      }
    };

    window.addEventListener('tokenEvent', handleEvent);

    return () => {
      window.removeEventListener('tokenEvent', handleEvent);
    };
  }, []);

  // console.log("checkToken", token)


  return (
    <>
      <Suspense fallback={<Progress />}>
        {show === true && (
          <div>
            <HeaderLazy token={token} />
          </div>
        )}
        <div style={{ display: show ? "flex" : "block" }}>
          {show === true && (
            <div>
              <SideMenuLazy token={token} />
            </div>
          )}
          <div style={{ width: "100%" }} >
            <Switch>

              <Route exact path="/unauthorized">
                <UnAuthorized />
              </Route>

              <Route path="/auth">
                <AuthLazy />
              </Route>

              <Route path="/">
                <HomeLazy token={token} />
              </Route>

            </Switch>
          </div>
        </div>
      </Suspense>
    </>
  )
}

export default App