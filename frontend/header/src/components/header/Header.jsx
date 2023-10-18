import styles from "./Header.module.css";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from 'react-redux';
import jwtDecode from "jwt-decode";
import { useState } from "react";
import { useSendLogoutMutation } from "../../redux/features/auth/authApiSlice";

const Header = () => {
    const [username, setUserName] = useState("");

    const history = useHistory();

    const { token } = useSelector(state => state.auth);

    useEffect(() => {
        if (token) {
            const decoded = jwtDecode(token);
            setUserName(decoded?.UserInfo?.username)
        }
    }, [token])

    const [sendLogout, {
        isLoading,
        isSuccess,
        isError,
        error,
        reset
    }] = useSendLogoutMutation()

    useEffect(() => {
        if (isSuccess) {
            history.push('/auth/signin')
            reset()
        } else if (isError) {
            alert(JSON.stringify(error.data?.message))
            reset()
        }
    }, [isSuccess, history])

    return (
        <div className={styles.HeaderParent} >
            <div style={{ width: "99%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div className={styles.heading}>
                    Dashboard
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div>
                        <h3 style={{ color: "#ff014f" }} >{username}</h3>
                    </div>
                    <div>
                        {token ? <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={sendLogout}
                            disabled={isLoading}
                        >
                            {isLoading ? "Logging Out..." : "Logout"}
                        </Button> : <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={() => history.push("/auth/signin")}
                        >
                            Sign in
                        </Button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header