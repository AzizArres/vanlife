/* eslint-disable no-unused-vars */
import React from "react"
import {Outlet} from  "react-router-dom"
import HeaderHost from "/src/components/HeaderHost.jsx"


export default function HostLayout(){
    return(
        <>
            <HeaderHost />
            <Outlet />
        </>
    )
}