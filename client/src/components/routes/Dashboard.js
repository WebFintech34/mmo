import React, { useContext } from "react";
import UserContext from "../../userContext";
import Table from "../Table/Table";
import allTradersResult  from "../Table/allTradersResult";
import allInvestorsResult  from "../Table/allInvestorsResult"

const Dashboard = () => {

    const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

    return (
            <div>
                <h1>Welcome XXX To Your Dashboard!</h1>
                
                {isLoggedIn &&   (
                    <>
                    <Table data = {allTradersResult.message} />
                   <button onClick={() => setIsLoggedIn(false)}>
                        {" "}
                        sign off
                    </button>
                    
                    </>
                )}
            </div>
    );

};

export default Dashboard;


