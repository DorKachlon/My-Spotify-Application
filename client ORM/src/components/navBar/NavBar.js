import React from "react";
import "../../styles/navBar.css";
import NarrowNav from "./NarrowNav";
import WideNav from "./WideNav";

export default function NavBar({ login, setLogin, smallScreen }) {
    return (
        <>
            {smallScreen ? (
                <NarrowNav login={login} setLogin={setLogin} />
            ) : (
                <WideNav login={login} setLogin={setLogin} />
            )}
        </>
    );
}
