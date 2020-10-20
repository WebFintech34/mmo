import React from "react";

const GeneratePagesBlock = ({numPages,currPage,handlePageChange}) => {
  
   const holder = Array(numPages).fill(null).map((_, i) => i+1);
   return (

        <div className ="pagination">
          <span >-</span >
          {holder.map(i => i !== currPage? <span key = {i} onClick = {handlePageChange}>{i}</span> :<span key = {i} onClick = {handlePageChange} className = "active">{i}</span>) }          
          <span >+</span>
        </div>

    )
}

export default GeneratePagesBlock;

