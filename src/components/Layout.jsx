/* eslint-disable no-unused-vars */
import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header.jsx"
import Footer from "../pages/Footer.jsx"

export default function Layout(){
    return(
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}