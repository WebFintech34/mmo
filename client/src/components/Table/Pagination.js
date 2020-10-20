import React, { useState } from "react";


const chunk = (arr, chunkSize) => {
    var R = [];
    for (var i = 0; i < arr.length; i += chunkSize)
      R.push(arr.slice(i, i + chunkSize));
    return R;
  }

const Pagination = ({toRender, currPage, numPerPage}) => {
        
    const blocks = chunk(toRender,numPerPage)

    return (
        blocks[currPage-1]
    )
}

export default Pagination;