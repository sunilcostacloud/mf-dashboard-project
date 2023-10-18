import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useRefreshMutation } from "../redux/features/authApiSlice";

const PersistLogin = ({ children }) => {

    const { token } = useSelector(state => state.tokens);

    const [trueSuccess, setTrueSuccess] = useState(false);

    const [refresh, {
        isUninitialized,
        isLoading,
        isSuccess,
        isError,
        error,
    }] = useRefreshMutation();

    useEffect(() => {
        const verifyRefreshToken = async () => {
            try {
                await refresh();
                setTrueSuccess(true);
            } catch (err) {
                console.error(err);
            }
        }
        verifyRefreshToken();
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    } else if (isError) {
        return (
            <p className='errmsg'>
                {`${error.data?.message} - `}
                {/* <Link to="/signin">Please login again</Link>. */}
                <Redirect to="/signin" />
            </p>
        );
    } else if (isSuccess && trueSuccess) {
        return children; // Render the child components from App.js
    } else if (token && isUninitialized) {
        return children; // Render the child components from App.js
    }

    // Default return statement
    return null;
};

export default PersistLogin;
