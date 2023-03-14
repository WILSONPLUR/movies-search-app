import React from "react";
import { Footer } from "./footer";
import { NavBar } from "./navbar";
import { Main } from "./main";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return (
        <>
            <NavBar />
            <Main>{children}</Main>
            <Footer />
        </>
    );
};
