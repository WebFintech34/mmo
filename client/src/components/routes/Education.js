import React, {useState, useEffect} from "react"
import NavBar from "../NavBars/NavBar"
import NavBarBottom from "../NavBars/NavBarBottom"
import Table from "../Table/Table"

import {rss} from "../../apiCalls"

const Education = () =>  {

    const[dataObj,setDataObj] = useState([
        {
            "title":"title1",
            "description":"desc1",
            "link":"link1",
            "date":"datt1111 date33"
           },
           {
            "title":"title2",
            "description":"desc2",
            "link":"link2",
            "date":"date333 date33"
           },
           {
            "title":"title",
            "description":"desc3",
            "link":"link3",
            "date":"date1345 date11"
           }
    ])
     
    /*
    useEffect(() => {
        let res = rss("GET", "/rss" )
        setDataObj(res)
    }, [])
    */

    return (
        
        <>
        <NavBar />
        <div className = "articles">
            <Table data = {dataObj} />
        </div>
        <NavBarBottom/>
        </>

    )

}

export default Education;