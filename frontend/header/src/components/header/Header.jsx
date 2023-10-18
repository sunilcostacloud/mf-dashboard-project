import styles from "./Header.module.css";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from 'react-redux';
import jwtDecode from "jwt-decode";
import { useState } from "react";

const Header = () => {
    const [username, setUserName] = useState("");

    const history = useHistory();

    const { token } = useSelector(state => state.tokens);

    useEffect(() => {
        if (token) {
            const decoded = jwtDecode(token);
            setUserName(decoded?.UserInfo?.username)
        }
    }, [token])

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
                        >
                            Logout
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