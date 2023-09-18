"use client"
import Image from 'next/image'
import Navbar from './../../components/navbar';
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
import ScrollToTop from '../../components/scrolltotop';
  
export default function Home() {
    return (
    
      <>
      <ScrollToTop/>
      <Navbar/>

     
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
        
        </>
      
      
   
  )
}
