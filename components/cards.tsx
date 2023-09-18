    'use client'
    import { useEffect, useState } from "react";
    import '/styles/globals.css'
    import { inView, motion, useAnimation, useInView } from "framer-motion"
    import { Rating } from '@smastrom/react-rating'
    import '@smastrom/react-rating/style.css'
    import { classrooms } from "../api/classrooms";
    import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SpaceBracket() {
  return (
    <p>&nbsp;&nbsp;</p>
  );
};
export const Cards = (): JSX.Element => {
      const [query, setQuery] = useState('')
      const [selectedFilters, setSelectedFilters] = useState([]);
      const [filteredClassrooms, setFilteredClassrooms] = useState(classrooms);
      let filters = ["IT & CSE","C/C++","Tiếng Việt","Tiếng Anh","Tiếng Trung","IELTS","Nấu Ăn","Fullstack","Frontend","Lập Trình","Backend","Piano","Design","Nhiều Thứ","Vẽ","Lịch Sử","Thuật Toán","Hóa Học","",""];
      const handleFilterButtonClick = (selectedCategory:never) => {
        if (selectedFilters.includes(selectedCategory)) {
          let filters = selectedFilters.filter((el) => el !== selectedCategory);
          setSelectedFilters(filters);
        } else {
          setSelectedFilters([...selectedFilters, selectedCategory]);
        }
      };
      // useEffect(() => {
      //   filterClassrooms();
      // }, [selectedFilters]);
      // const filterClassrooms = () => {
      //   if (selectedFilters.length > 0) {
      //     let tempClassrooms = selectedFilters.map((selectedCategory) => {
      //       let temp = classrooms.filter((classrooms) => classrooms.category === selectedCategory);
      //       return temp;
      //     });
      //     setFilteredClassrooms(tempClassrooms.flat());
      //   } else {
      //     setFilteredClassrooms([...classrooms]);
      //   }
      // };
      return (
        <>
        <motion.div
        variants={{
          hidden: { opacity: 0, y: 75},
          visible: {opacity: 1, y: 0},
        }}
        initial="hidden"
        animate="visible"
        transition={{duration: 0.7, delay:0.2}}
        >
        <div className="flex flex-row  justify-center items-center mb-5 ">
    
  
          <input type="text" value={query} 
          className=" rounded-xl w-[300px] items-center  p-1 " 
          placeholder="   Tìm lớp học ở đây" 
          onChange={(e) => setQuery(e.target.value)} />

        <button className="text-white  hover:text-sky-500 pt-1 pb-1 pl-2 pr-2 items-center rounded-full transition-all duration-[0.3s] ease-[ease]">
        <FontAwesomeIcon icon={faMagnifyingGlass} fade size="xl" style={{}} />
        </button>
        
        </div>
          {/* <nav className=" container m-auto grid grid-cols-10 max-lg:hidden  gap-4 justify-center items-center"> */}
            {/* implementing state */}
            {/* {filters.map((category, idx) =>( */}
          {/* <button  */}
          {/* className={`button ${ */}
            {/* selectedFilters?.includes(category) ? "no-underline rounded-xl text-black border-black w-auto  inline-block hover:border-white py-[9px] px-4 font-medium  mr-3 bg-white  hover:shadow-[3px_3px_0_0_#5a5a5a]  transition-all duration-[0.3s] ease-[ease]" : "no-underline rounded-xl text-white border-white w-auto  inline-block hover:border-black py-[9px] px-4 font-medium  mr-3 bg-gray-800 hover:bg-white hover:shadow-[3px_3px_0_0_#a3a3a3] hover:text-black transition-all duration-[0.3s] ease-[ease]" */}
          {/* }`} */}
          {/* onClick={() => handleFilterButtonClick(category)} */}
          {/* key={`filters-${idx}`} */}
 
          {/* >{category}</button> */}
            {/* ))} */}
          {/* </nav> */}
          </motion.div>

          {/* card */}
          <div className='max-w-[1320px] items-center mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-2 lg:px-0 sm:px-[20px] px-[20px]'> 
          
        {classrooms.filter((classrooms,idx)=>
          classrooms.uid.toLowerCase().includes(query) || 
          classrooms.uid.toUpperCase().includes(query) || 
          classrooms.description.toLowerCase().includes(query) || 
          classrooms.description.toUpperCase().includes(query) ||
          classrooms.name.toLowerCase().includes(query) || 
          classrooms.category.toLowerCase().includes(query) || 
          classrooms.category.toUpperCase().includes(query) || 
          classrooms.name.toUpperCase().includes(query)).map((classrooms, idx)=> (
            
        <div key={classrooms.uid}  className="w-auto h-auto group ">

          <a href={classrooms.link}>

          <div className="flex group content-center justify-center  w-auto h-auto mt-[20px] transition-all duration-[0.3s] ease-[ease] ">
          <motion.div
          whileHover={
            {
            scale:1.1,
            textShadow:"0px 0px 12px rgb(255,255,255)",
          }
          
          }
        >
            <div className="relative w-[275px] h-[294px] -top-px -left-px rounded-[33px] border-black group-hover:bg-white group bg-gray-800 border border-solid shadow-[0px_4px_4px_#00000040]">
              <div className=" transition-all duration-[0.3s] ease-[ease] absolute overflow-scroll no-scrollbar scroll-smooth w-[248px] h-[161px] top-[99px] left-[13px] group-hover:bg-slate-100  rounded-[19px] border-[#888888] bg-gray-800 border border-solid shadow-[0px_4px_4px_#00000040]">
                <p className="group-hover:text-black text-justify	absolute w-[224px] shrink top-[7px] left-[11px] right-[11px] [font-family:'Tahoma-Regular',Helvetica] font-normal text-white text-[100%] tracking-[0] leading-[normal]">
                {classrooms.description}
                </p>
              </div>
              <img
                className="absolute w-[65px] h-[65px] top-[14px] left-[14px] rounded-full object-cover"
                alt="Image url"
                src={classrooms.image_url}
              />
              <div className="group-hover:text-black absolute break-all mr-5 w-fit shrink top-[14px] left-[92px] [font-family:'Tahoma-Regular',Helvetica] font-normal text-white text-[21px] tracking-[0] leading-[normal]">
                {classrooms.name}
              </div>
              <div className="absolute w-[147px] top-[46px] left-[92px] [font-family:'Tahoma-Regular',Helvetica] font-normal text-white text-[11px] tracking-[0] leading-[normal]">
                
                
              </div>
            <Rating
              style={{ maxWidth: 100 }}
              value={classrooms.rating}
              readOnly
              className="absolute top-[64px] left-[92px] "
            />
             
            </div>
            </motion.div>
          </div>
         
          </a>
        </div>
        ))}
        </div>
        </>
      );
    };