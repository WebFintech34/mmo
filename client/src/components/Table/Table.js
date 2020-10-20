import React, { useState } from "react";
import TableTop from "./TableTop";
import "./Table.css"
//import UserContext from "../../userContext";
import Pagination from "./Pagination"

// below data can be used as initial placeholder data 
import allTradersResult  from "./allTradersResult";
//import allInvestorsResult  from "./allInvestorsResult";

//import {login} from "../../apiCalls";
 
const allTaders  = allTradersResult["message"];
//const allInvestorsResult  = allInvestorsResult.message;

const Table = () => {

    const [allTraders, setAllTraders]       = useState(allTaders);
    const [tradersToShow, setTradersToShow] = useState(allTaders);
    const [currPage, setCurrPage] = useState(1);
    const [numPerPage, setNumPerPage]  = useState(5);
    const [numPages, setNumPages]  = useState(Math.ceil(5));
    const [filter, setFilter]  = useState("");

    /*
    useEffect(() => {
          const result = login("GET", "/trader/all");
          setAllTraders(result.message);
          setTradersToShow(result.message);
      }, []);
    */

   const tableGenerator = (allArray) => {     

    // allArray can be traders, investors or any other arr Data we want in table like this 
    const one   = allArray[0];
    const headers  = Object.keys(one)
    const headersCap = headers.map(str => str.slice(0,1).toUpperCase() + str.slice(1));
    const toRender = allArray.map((one,i) => (      
          <tr key = {i} >
              {headers.map((header,i)  => header!=="picture"? <td key = {i}>{one[header]}</td>:<td key = {i}><img src = {one[header]} alt = {one["name"]}/></td>)}
          </tr>
      )
      )

    return (
      <table >
        <thead >
          <tr>
            {headersCap.map((header,i) => <th key = {i} >{header}</th>)}
          </tr>
        </thead>
        <tbody>
          <Pagination numPerPage = {numPerPage} toRender = {toRender } currPage= {currPage}/>
        </tbody>
      </table>
    );
}
    
    const handleSelectChange = (e) => {
      const value = e.target.value
      setNumPerPage(value)
      setNumPages(Math.ceil(tradersToShow.length/value))
    } 

    const handleSearchChange = (e) => {
      const value = e.target.value
      setFilter(value)
      console.log(filter)
    } 

    const handlePageChange = (e) => {
      const value = e.target.innerHTML
      console.log(value)
      if(value === "+") {
        setCurrPage((currPage+1)<=numPages?(currPage+1):numPages)
      } else if(value === "-") {
        setCurrPage((currPage-1)>=0?(currPage-1):0)
      } else {
        setCurrPage(value)
      }

    } 

    return (
        <div className="table">
            <TableTop numPages= {numPages} 
                      currPage= {currPage} 
                      handleSearchChange = {handleSearchChange} 
                      handleSelectChange = {handleSelectChange}
                      handlePageChange = {handlePageChange}
                      filter = {filter} 
            />
            {tableGenerator(tradersToShow)}
        </div>
    );
};

export default Table;
