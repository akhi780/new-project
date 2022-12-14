import React from 'react'
import Banner from '../components/banner/Banner'
import Navbar from '../components/navbar/Navbar'
import Work from '../components/work/Work'
import Project from '../components/project/Project'
import Product from '../components/product/Product'
import Client from '../components/client/Client'
import Form from '../components/form/Form'
import Blog from '../components/blog/Blog'
import { Footer } from '../components/footer/Footer'

export const Home = () => {
  return (
    <>
         <Navbar/>
         <Banner/>
         <Work/>
         <Project/>
         <Product/>
         <Client/>
         <Form/>
         <Blog/>
         <Footer/>
    </>
  )
}
