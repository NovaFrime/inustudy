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
import axios from "axios";
import SearchBar from "./searchbar";    
import CircleLoader from "react-spinners/ClipLoader";


export const Cards = (): JSX.Element => {
      const [query, setQuery] = useState('')
      interface Classroom {
        uid: string;
        image_url: string;
        name: string;
        link: string;
        description: string;
        lang: string;
        category: string;
        rating: number;
      }
      const [data, setData] = useState<Classroom[]>([]);
      const [filteredList, setFilteredList] = useState(classrooms);
      const [loading, setLoading] = useState(true); 
      const [posts, setPosts] = useState([]); 
      const [isOn, setIsOn] = useState(true);



      useEffect(() => {
        // Simulate data loading
        setTimeout(() => {
          setData(classrooms);
          setLoading(false);
        }, 5000);
      }, []);
    
    let filters = ["IT & CSE","C/C++","Tiếng Việt","Tiếng Anh","Tiếng Trung","Vật Lý","IELTS","Nấu Ăn","Fullstack","Frontend","Lập Trình","Backend","Piano","Design","Nhiều Thứ","Vẽ","Lịch Sử","Thuật Toán","Hóa Học","AI","Luật","Kinh Tế Vi Mô","Tư Duy Thiết Kế"];
    const toggleIsOn = () => {
        setIsOn(!isOn);
      };
      return (
        <>

        <div className="flex flex-row  justify-center items-center mb-5 lg:mt-[-100px]">
            
                <input type="text" value={query} 
                className=" rounded-xl w-[300px] items-center  p-1" 
                placeholder="   Tìm lớp học ở đây" 
                onChange={(e) => setQuery(e.target.value)} />

            <button className="text-white hover:text-sky-500 pt-1 pb-1 pl-2 pr-2 items-center rounded-full transition-all duration-[0.3s] ease-[ease]">
            <FontAwesomeIcon icon={faMagnifyingGlass} fade size="xl" style={{}} />
            </button>
            <input
        type="checkbox"
        checked={isOn}
        onChange={toggleIsOn}
        className={`toggle-checkbox flex content-center w-10 h-7 rounded-full bg-white border-4 appearance-none cursor-pointer max-lg:hidden ${isOn ? "bg-gray-400" : "bg-blue-400"}`}
      />
            </div>

                {/* please add grid to this dude */}
                {isOn ? (<></>) : 
                <nav className=" container m-auto
                 grid
                 grid-cols-10  max-lg:hidden gap-4 justify-center items-center">
                {filters.map((category, idx) =>(
                <button className="no-underline rounded-xl text-white border-white w-auto brake-all  inline-block hover:border-black py-[9px] px-4 font-medium  
                mr-3 bg-gray-800 hover:bg-white hover:text-black transition-all duration-[0.3s] ease-[ease]" 
                key={`filters-${idx}`}
                // onClick={()=> handleFilterButtonClick(category)}
                // className={`button ${
                // selectedFilters?.includes(category) ? "active" : ""
                //  }`}
                >{category}</button>

                ))}
                </nav>}

        {loading ? (
            <div
            className="flex items-center justify-center"
            >
            
                <CircleLoader
                color="#36d7b7"
                size={200}
                className="cols-1"
                >
                <CircleLoader
                color="#36d7b7"
                size={180}
                >
                <CircleLoader
                color="#36d7b7"
                size={160}
                >
                <CircleLoader
                color="#36d7b7"
                size={140}
                >
                </CircleLoader>    
                </CircleLoader>    
                </CircleLoader>    
                </CircleLoader>
                <h1></h1>
            </div>
        ) :  
        <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4  
        px-2 pb-0 pt-0 gap-2 sm:px-3 md:px-4 lg:px-[80px]
        sm:gap-3 md:gap-6 lg:gap-10
        scroll-smooth focus:scroll-auto'>
        {classrooms.filter(classroom => 
        classroom.name.toLowerCase().includes(query) ||
        classroom.name.toUpperCase().includes(query) ||
        classroom.uid.includes(query) ||
        classroom.category.toUpperCase().includes(query)||

        classroom.category.toLowerCase().includes(query)
        ).map((classroom) =>
        <a href={classroom.link} key={classroom.uid} target="_blank" rel="noreferrer" className="max-w-sm group hover:bg-white shadow-lg rounded-lg my-4 transition-all duration-[0.6s] ease-[ease]s">
        <img className="flex rounded-full group-hover:shadow-lg object-cover mt-10 w-[100px] h-[100px] mx-auto transition-all duration-[1.3s] ease-[ease]" 
        src={classroom.image_url} 
        alt="avatar"/>
        <div className="py-4 px-6">
            <h1 className="text-2xl font-semibold text-white group-hover:text-black">{classroom.name} {<Rating className="transition-all duration-[0.6s] ease-[ease]s opacity-50 group-hover:opacity-100" readOnly value={classroom.rating} style={{ maxWidth: 100}} />}</h1>
            <p className="py-2 text-lg text-gray-200 group-hover:text-gray-700">{classroom.description}</p>
        <div className="mt-[-10] group-hover:mt-[-2] bottom-0 group-hover:text-gray-700 transition-all duration-[0.6s] ease-[fade]">
                <h1 className="px-2 text-sm inline-block mr-2 bg-white group-hover:bg-blue-200 rounded-lg transition-all duration-[1.3s] ease-[ease]">{classroom.category.toString().replaceAll("'","").replaceAll("[","").replaceAll("]","").replaceAll(","," và ")}</h1>
                    
                {/* <h1 className="group-hover:px-2 group-hover:text-sm scale-0 group-hover:scale-100 group-hover:flex group-hover:bg-purple-200 group-hover:rounded-lg transition-all duration-[1.2s] ease-[ease]">Tag 2</h1>
                <h1 className="group-hover:px-2 group-hover:text-sm scale-0 group-hover:scale-100 group-hover:flex group-hover:bg-yellow-200 group-hover:rounded-lg transition-all duration-[1.5s] ease-[ease]">Tag 3</h1> */}
            </div>
            
        </div>

    </a>
    
    )}</div>}
        
        </>
      );
    };