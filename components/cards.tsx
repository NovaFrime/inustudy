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
    import SearchBar from "./searchbar";    
export const Cards = (): JSX.Element => {
      const [query, setQuery] = useState('')
      const [filteredList, setFilteredList] = useState(classrooms);
      let category = ["IT & CSE","C/C++","Tiếng Việt","Tiếng Anh","Tiếng Trung","IELTS","Nấu Ăn","Fullstack","Frontend","Lập Trình","Backend","Piano","Design","Nhiều Thứ","Vẽ","Lịch Sử","Thuật Toán","Hóa Học","",""];
      return (
        <>
        {classrooms.map((classroom) =>
        
        <a href={classroom.link} key={classroom.uid} className="max-w-sm group hover:bg-white shadow-lg rounded-lg my-4 transition-all duration-[0.6s] ease-[ease]s">
        <img className="flex rounded-full object-cover mt-10 w-[100px] h-[100px] mx-auto" 
        src={classroom.image_url} 
        alt="avatar"/>
        <div className="py-4 px-6">
            <h1 className="text-2xl font-semibold text-white group-hover:text-black">{classroom.name}</h1>
            <p className="py-2 text-lg text-gray-200 group-hover:text-gray-700">{classroom.description}</p>
        <div className="mt-[-10] group-hover:mt-[-2] bottom-0 group-hover:text-gray-700 transition-all duration-[0.6s] ease-[fade]">
                <h1 className="px-2 text-sm scale-0 group-hover:scale-100 inline-block mr-2 group-hover:bg-blue-200 rounded-lg transition-all duration-[1.5s] ease-[ease]">{classroom.category.toString().replaceAll("'","").replaceAll("[","").replaceAll("]","").replaceAll(","," và ")}</h1>

                {/* <h1 className="group-hover:px-2 group-hover:text-sm scale-0 group-hover:scale-100 group-hover:flex group-hover:bg-purple-200 group-hover:rounded-lg transition-all duration-[1.2s] ease-[ease]">Tag 2</h1>
                <h1 className="group-hover:px-2 group-hover:text-sm scale-0 group-hover:scale-100 group-hover:flex group-hover:bg-yellow-200 group-hover:rounded-lg transition-all duration-[1.5s] ease-[ease]">Tag 3</h1> */}
            </div>
        </div>
    </a>
    )}
    
        </>
      );
    };