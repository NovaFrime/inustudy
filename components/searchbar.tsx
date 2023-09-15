
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

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const SearchBar = () => {
  const [selectedFilters, setselectedFilters] = useState([])
  const [query, setQuery] = useState('')

  let filters = ["Tiếng Việt","Tiếng Anh","Tiếng Trung","IELTS","Nấu Ăn","Fullstack","Frontend","Lập Trình","Backend","Piano","Design","Nhiều Thứ","Vẽ","Lịch Sử","Thuật Toán","Hóa Học"];
  const handleSearch = () => {
    // Make a request to the API to search for the query.
    // Update the state variable with the results.
  };

  return (
<>
<div className="flex flex-row justify-center items-center mb-5 ">
    
  
      <input type="text" value={query} className=" rounded-xl w-[300px] items-center  p-1" placeholder="   Tìm lớp học ở đây" onChange={(e) => setQuery(e.target.value)} />
  
    <button className="text-white hover:text-sky-500 pt-1 pb-1 pl-2 pr-2 items-center rounded-full transition-all duration-[0.3s] ease-[ease]" onClick={handleSearch}>
    <FontAwesomeIcon icon={faMagnifyingGlass} fade size="xl" style={{}} />
    </button>
    
    </div>
      <nav className="flex justify-center items-center">
        {filters.map((category, idx) =>(
      <button className="no-underline rounded-xl text-white py-[9px] px-4 font-medium  
      mr-3 bg-gray-800 hover:bg-indigo-darker transition-all duration-[0.3s] ease-[ease]" 
      key={`filters-${idx}`}
      // onClick={()=> handleFilterButtonClick(category)}
      >{category}</button>

        ))}

       </nav>
              </>
    
    
  );
};

export default SearchBar;