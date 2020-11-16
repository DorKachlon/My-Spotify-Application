import React from "react";
import NarrowNav from "./NarrowNav";
import WideNav from "./WideNav";
import "../../styles/navBar.css";

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
