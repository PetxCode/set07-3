import React from "react"
import { Header } from "./Header"
import Footer from "./Footer"
import { Sider } from "./Sider"
import { Outlet } from "react-router-dom"


export const MainLayout = () => {

    return (
        <div>
            <Header />
            <Sider />

            <Outlet />

            {/* <Footer /> */}

        </div>
    )
}

