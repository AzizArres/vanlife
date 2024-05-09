import React from 'react'
import ReactDom from 'react-dom'
import { useState } from 'react'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from './pages/About.jsx'
import Vans from './pages/Vans/Vans.jsx'
import Footer from "./pages/Footer.jsx"
import "./server.js"
import VanDetail from "./pages/Vans/VanDetail.jsx"
import Layout from "./components/Layout.jsx"
import Dashboard from "./pages/Host/Dashboard.jsx"
import Income from "./pages/Host/Income.jsx"
import Reviews from "./pages/Host/Reviews.jsx"
import HostLayout from "./components/HostLayout.jsx"
import HostVans from "./pages/Host/HostVans.jsx"
import HostVanDetail from "./pages/Host/HostVanDetail.jsx"
import Details from "./pages/HostVans/Details.jsx"
import Pricing from "./pages/HostVans/Pricing.jsx"
import Photos from "./pages/HostVans/Photos.jsx"


function App() {


  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetail />} />
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetail/>}>
                <Route index element={<Details />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="photos" element={<Photos />} />
              </Route>
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App;
