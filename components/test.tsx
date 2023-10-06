    'use client'
    import { useEffect, useState } from "react";
    import '/styles/globals.css'
    import { Link } from "react-router-dom";
    import { inView, motion, useAnimation, useInView } from "framer-motion"
    import { Rating } from '@smastrom/react-rating'
    import '@smastrom/react-rating/style.css'
    import { classrooms } from "../api/classrooms";
    import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Cards = (): JSX.Element => {
      const [query, setQuery] = useState('')
      let category = ["IT & CSE","C/C++","Tiếng Việt","Tiếng Anh","Tiếng Trung","IELTS","Nấu Ăn","Fullstack","Frontend","Lập Trình","Backend","Piano","Design","Nhiều Thứ","Vẽ","Lịch Sử","Thuật Toán","Hóa Học","",""];
      return (
        <>
        <div className="max-w-sm group hover:bg-white shadow-lg rounded-lg my-4">
        <img className="flex rounded-full object-cover mt-10 w-[100px] h-[100px] mx-auto" 
        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" 
        alt="avatar"/>
        <div className="py-4 px-6">
            <h1 className="text-2xl font-semibold text-white group-hover:text-black">Patterson johnson</h1>
            <p className="py-2 text-lg text-gray-700">Full Stack maker & UI / UX Designer , love hip hop music Author of Building UI.</p>
            <div>
            <div className=" items-center mt-4 text-white group-hover:text-gray-700">
                <h1 className="group-hover:px-2 group-hover:text-sm hidden group-hover:block group-hover:bg-blue-200 group-hover:rounded-lg">Tag 1</h1>
            </div>
            <div className="items-center mt-4 text-white group-hover:text-gray-700">
                <h1 className="group-hover:px-2 group-hover:text-sm hidden group-hover:block group-hover:bg-purple-200 group-hover:rounded-lg">Tag 2</h1>
            </div>
            <div className="items-center mt-4 text-white group-hover:text-gray-700">
                <h1 className="group-hover:px-2 group-hover:text-sm hidden group-hover:block group-hover:bg-yellow-200 group-hover:rounded-lg">Tag 3</h1>
            </div>
            </div>
        </div>
    </div>
            
        </>
      );
    };