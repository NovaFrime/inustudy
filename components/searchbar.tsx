
// import React, { useState } from "react";

// const SearchBar = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredclassrooms, setFilteredclassrooms] = useState([]);

//   const handleChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Filter the classrooms based on the search term
//     const filteredclassrooms = classrooms.filter((classroom) => {
//       return classroom.title.toLowerCase().includes(searchTerm.toLowerCase());
//     });

//     setFilteredclassrooms(filteredclassrooms);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={handleChange}
//         />
//         <button type="submit">Search</button>
//       </form>

//       <div>
//         {filteredclassrooms.length > 0 ? (
//           <ul>
//             {filteredclassrooms.map((classroom) => (
//               <li key={classroom.id}>{classroom.title}</li>
//             ))}
//           </ul>
//         ) : (
//           <p>No classrooms found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchBar;

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { classrooms } from "../api/classrooms";
const SearchBar = () => {
  const [query, setQuery] = useState('')
  const [searchItem, setSearchItem] = useState('')
  const [filteredUsers, setFilteredUsers] = useState(classrooms)

  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(classrooms);
  
  let filters = ["IT & CSE","C/C++","Tiếng Việt","Tiếng Anh","TiếngTrung","IELTS","Nấu Ăn","Fullstack","Frontend","Lập Trình","Backend","Piano","Design","Nhiều Thứ","Vẽ","Lịch Sử","Thuật Toán","Hóa Học","...","..."];
  const handleSearch = () => {
    // Make a request to the API to search for the query.
    // Update the state variable with the results.
  }
  return (
<>
<div className="flex flex-row  justify-center items-center mb-5 ">
    
  
      <input type="text" value={query} 
      className=" rounded-xl w-[300px] items-center  p-1" 
      placeholder="   Tìm lớp học ở đây" 
      onChange={(e) => setQuery(e.target.value)} />
  
    <button className="text-white hover:text-sky-500 pt-1 pb-1 pl-2 pr-2 items-center rounded-full transition-all duration-[0.3s] ease-[ease]">
    <FontAwesomeIcon icon={faMagnifyingGlass} fade size="xl" style={{}} />
    </button>
    
    </div>
      <nav className=" container m-auto grid grid-cols-10  max-lg:hidden  gap-4 justify-center items-center">
        {filters.map((category, idx) =>(
      <button className="no-underline rounded-xl text-white border-white w-auto brake-all  inline-block hover:border-black py-[9px] px-4 font-medium  
      mr-3 bg-gray-800 hover:bg-white hover:text-black transition-all duration-[0.3s] ease-[ease]" 
      key={`filters-${idx}`}
      // onClick={()=> handleFilterButtonClick(category)}
      // className={`button ${
      //   selectedFilters?.includes(category) ? "active" : ""
      // }`}
      >{category}</button>

        ))}

       </nav>
              </>
    
    
  );
};

export default SearchBar;