"use client"
import Navbar from './../../components/navbar';
// import { Cards } from '../../components/test';
import { Cards } from '../../components/cards';
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
        
        <Cards/>
        </motion.div>
        <Footer/>
        </>
  )
}
