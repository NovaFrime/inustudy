"use client"
import Navbar from './../../components/navbar';
import { Cards } from '../../components/test';
import { useEffect, useState } from "react";
import SearchBar from '../../components/searchbar';
import React from 'react';
import { inView, motion} from "framer-motion"
import ScrollToTop from '../../components/scrolltotop';
import Footer from '../../components/footer';
  
export default function Home() {
    return (
      <>
      <ScrollToTop/>
      <Navbar/>
      <div className='p-1 pt-0 sm:p-3 md:p-6 lg:p-10'>
      <SearchBar/>
      </div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75},
          visible: {opacity: 1, y: 0},
        }}
        initial="hidden"
        animate="visible"
        transition={{duration: 1, delay:0.25}}
        >
        <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4  
        px-2 pb-0 pt-0 gap-2 sm:px-3 md:px-4 lg:px-[80px]
        sm:gap-3 md:gap-6 lg:gap-10'>
        <Cards/> 
        <Cards/> 
        <Cards/> 
        <Cards/> 
        <Cards/> 
        <Cards/> 
        <Cards/> 
        <Cards/> 
        <Cards/> 
        <Cards/> 
        <Cards/> 
        <Cards/>
        </div>  
        </motion.div>
        <Footer/>
        </>
  )
}
