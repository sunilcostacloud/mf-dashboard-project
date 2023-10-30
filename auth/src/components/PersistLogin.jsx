import { useState } from "react";
import { useRefreshMutation } from "../redux/features/auth/authApiSlice";
import { useEffect } from "react";

const PersistLogin = () => {

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

    return { isLoading, isError, error, isSuccess, isUninitialized, trueSuccess }
};

export default PersistLogin;
