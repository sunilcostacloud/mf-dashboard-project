import { useSelector } from "react-redux"
import { Redirect } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";

const RequireAuth = ({ allowedRoles, children }) => {

  const { token } = useSelector(state => state.auth);

  console.log("checkRolesToken", token)

  const [data, setData] = useState({});

  const { username, roles } = data;

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      setData(decoded?.UserInfo)
    }
  }, [token])

  const hasRequiredRole = roles?.some(role => allowedRoles?.includes(role))

  if (hasRequiredRole) {
    // Render the child components if the user has the required role
    return children;
  } else if (username) {
    // Redirect to the unauthorized page if the user doesn't have the required role
    return <Redirect to="/unauthorized" />;
  } else {
    return null
  }
}

export default RequireAuth