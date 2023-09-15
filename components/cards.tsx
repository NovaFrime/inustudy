    'use client'
    import { useEffect, useState } from "react";
    import '/styles/globals.css'
    import { Link } from "react-router-dom";
    import { inView, motion, useAnimation, useInView } from "framer-motion"
    import { Rating } from '@smastrom/react-rating'
    import '@smastrom/react-rating/style.css'
    import { classrooms } from "../api/classrooms";
function SpaceBracket() {
  return (
    <p>&nbsp;&nbsp;</p>
  );
};
export const Cards = (): JSX.Element => {
      const [filteredItems, setFilteredItems] = useState(classrooms)
      return (
        <>
        {filteredItems.map((classrooms,idx)=>(
        <div key={`items-${idx}`}  className="w-auto h-auto group ">
          <motion.div
        whileHover={{ scale: 1, rotate: 360 }}
      >
        
          <a href={classrooms.link}>

          <div className="flex content-center justify-center  w-auto h-auto mt-[20px] transition-all duration-[0.3s] ease-[ease] ">
            <div className="relative w-[275px] h-[294px] -top-px -left-px rounded-[33px] border-black bg-gray-800 border border-solid shadow-[0px_4px_4px_#00000040]">
              <div className=" absolute overflow-scroll no-scrollbar scroll-smooth w-[248px] h-[161px] top-[99px] left-[13px]  rounded-[19px] border-[#888888] bg-gray-800 border border-solid shadow-[0px_4px_4px_#00000040]">
                <p className="	absolute w-[224px] shrink top-[7px] left-[11px] right-[11px] [font-family:'Tahoma-Regular',Helvetica] font-normal text-white text-[100%] tracking-[0] leading-[normal]">
                {classrooms.description}
                </p>
              </div>
              <img
                className="absolute w-[65px] h-[65px] top-[14px] left-[14px] rounded-full object-cover"
                alt="Image url"
                src={classrooms.image_url}
              />
              <div className="absolute break-all mr-5 w-fit shrink top-[14px] left-[92px] [font-family:'Tahoma-Regular',Helvetica] font-normal text-white text-[21px] tracking-[0] leading-[normal]">
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
            
          </div>
          
          </a>
          
          </motion.div>
        </div>
        ))}
        </>
      );
    };