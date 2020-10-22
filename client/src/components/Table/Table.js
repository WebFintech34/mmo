import React, { useState } from "react";
import TableTop from "./TableTop";
import "./Table.css"
//import UserContext from "../../userContext";

// below data can be used as initial placeholder data 
import allTradersResult  from "./allTradersResult";
//import allInvestorsResult  from "./allInvestorsResult";

//import {login} from "../../apiCalls";
 
const allTaders  = allTradersResult["message"];
//const allInvestorsResult  = allInvestorsResult.message;

// array of chunks to hold info for each page
const chunk = (arr, chunkSize) => {
  var R = [];
  for (var i = 0; i < arr.length; i += chunkSize)
    R.push(arr.slice(i, i + chunkSize));
  return R;
}

const Table = () => {

    const [allTraders, setAllTraders]       = useState(allTaders);
    const [tradersToShow, setTradersToShow] = useState(allTaders);
    const [numTraders, setNumTraders]       = useState(tradersToShow.length);
    const [numPerPage, setNumPerPage]       = useState(5);
    const [currPage, setCurrPage]           = useState(1);    
    const [numPages, setNumPages]           = useState(Math.ceil(numTraders/numPerPage));
    const [chunksPages, setChunksPages]     = useState(chunk(tradersToShow, numPerPage));
    const [filter, setFilter]  = useState("");

    /*
    useEffect(() => {
          const result = login("GET", "/trader/all");
          setAllTraders(result.message);
          setTradersToShow(result.message);
      }, []);
    */

   const one   = allTraders[0];
   const headers  = Object.keys(one)
   const headersCap = headers.map(str => str.slice(0,1).toUpperCase() + str.slice(1));

   const tableGenerator = (allArray) => {     

    // allArray can be traders, investors or any other arr Data we want in table like this 
    const toRender = () => {   
      let check = chunksPages[currPage-1].length === 0 ? [] : chunksPages[currPage-1]
      let toShow = check.map((one,i) => (      
        <tr key = {i} >
            {headers.map((header,i)  => header!=="picture"? <td key = {i}>{one[header]}</td>:<td key = {i}><img src = {one[header]} alt = {one["name"]}/></td>)}
        </tr>
        ) 
      )
      return toShow
    }

    return (
      <table >
        <thead >
          <tr>
            {headersCap.map((header,i) => <th key = {i} >{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {toRender()}
        </tbody>
      </table>
    );
}
    
    const handleSelectChange = async (e) =>  {
      const value = e.target.value
      setNumPerPage(value)
      setNumPages(Math.ceil(tradersToShow.length/value))
      setChunksPages(chunk(tradersToShow, numPerPage))

    } 

    const handleSearchChange = (e) => {
      const value = e.target.value
      setFilter(value)
      let results = tradersToShow.filter(obj => Object.values(obj).includes(filter))
      console.log(results)
      //setCurrPage(1)
      //setTradersToShow(results)
      //setNumTraders(results.length)
      //setNumPages(Math.ceil(tradersToShow.length/numPerPage))
      //setChunksPages(chunk(tradersToShow, numPerPage))
    } 

    const handlePageChange = (e) => {
      const value = e.target.innerHTML
      console.log(value)
      if(value === "+") {
        setCurrPage((currPage+1)<=numPages?(currPage+1):numPages)
        console.log(currPage)
      } else if(value === "-") {  
        if(currPage>=2)  {    
          setCurrPage(currPage-1)
        }
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
