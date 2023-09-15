"use client"
import Image from 'next/image'
import Navbar from './../../components/navbar';
import { useLocation } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Cards } from '../../components/cards';
import { useEffect, useState } from "react";
import SearchBar from '../../components/searchbar';
import { Context } from 'urql';
import React from 'react';
import Head from 'next/head';
import { cacheExchange, createClient, fetchExchange, gql } from '@urql/core';
import { registerUrql } from '@urql/next/rsc';
import { Suspense } from 'react';
import { useQuery} from '@urql/next';
import { inView, motion} from "framer-motion"
import { useRef } from 'react'
  
export default function Home() {
    return (
    
    <body className="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-white via-white to-slate-900 bg-repeat w-full h-full no-scrollbar scroll-smooth">

      <BrowserRouter>

      <Navbar/>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75},
          visible: {opacity: 1, y: 0},
        }}
        initial="hidden"
        animate="visible"
        transition={{duration: 0.7, delay:0.2}}
        >
      <SearchBar/>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75},
          visible: {opacity: 1, y: 0},
        }}
        initial="hidden"
        animate="visible"
        transition={{duration: 1, delay:0.25}}
        >

        
       
        <div className='max-w-[1320px] items-center mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-2 lg:px-0 sm:px-[20px] px-[20px]'> 
       
        <Cards/> 
        </div>
        </motion.div>
        
        
      </BrowserRouter>
      
      
    </body>
   
  )
}
