import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// import useBookings from "../../hooks/useBookings";

import UserDetailContext from "../context/UserDetailContext";
import { useMutation } from "react-query";
import { createUser } from "../utils/api";
import Navbar from "./Navbar";
import Footer from "./Footer";
import useFavourites from "../hooks/useFavourites";

const Layout = () => {

      useFavourites()
    //   useBookings()

    const { isAuthenticated, user, getAccessTokenWithPopup } = useAuth0();
    const { setUserDetails } = useContext(UserDetailContext);

    const { mutate } = useMutation({
        mutationKey: [user?.email],
        mutationFn: (token) => createUser(user?.email, token),
    });

    useEffect(() => {
        const getTokenAndRegister = async () => {
            try {
            console.log("Enter in try block");

            // "ERROR IN 'RES', causing userDetails to be unable to fetch, so createUser reqvest can't call" 
                const res = await getAccessTokenWithPopup({
                    authorizationParams: {
                        audience: "http://localhost:5555",
                        scope: "openid profile email",
                    },
                });
                console.log("res in Layout.jsx is :" + res);

                localStorage.setItem("access_token : ", res);
                setUserDetails((prev) => ({ ...prev, token: res }));
                mutate(res);
            } catch (error) {
                console.error("Error obtaining access token:", error); 
            }
        };

        // isAuthenticated && getTokenAndRegister();
        isAuthenticated && mutate();
    }, [isAuthenticated]);

    return (
        <>
            <div style={{ background: "var(--black)", overflow: "hidden" }}>
                <Navbar />
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default Layout;
