import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Bloggroup from '../components/bloggroup/Bloggroup'
import Blogtextgroup from '../components/blogtextgroup/Blogtextgroup'
const Mainblog = () => {
  return (
    <>
    <Navbar/>
    <Bloggroup/>
    <Blogtextgroup/>
    <Footer/>
    </>
  )
}

export default Mainblog