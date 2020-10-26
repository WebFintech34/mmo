import React from "react";
import GeneratePagesBlock from "./GeneratePagesBlock";


const TableTop = ({currPage ,numPages,handleSearchChange, handleSelectChange, handlePageChange,filter }) => {  

    return (

            <div className = "table-top">
                <label >Show: </label>
                <select onChange ={handleSelectChange}  name="numToShow" id="show" >
                    <option value="5">5</option>    
                    <option value="10">10</option>                 
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="50">50</option>
                </select>
                <GeneratePagesBlock handlePageChange= {handlePageChange} currPage = {currPage} numPages = {numPages}  />
                <input value = {filter}  onChange = {handleSearchChange} type="text" placeholder="Search.." name="search" />
            </div>

    );
};



export default TableTop;