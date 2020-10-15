import React, { useContext } from "react";
import UserContext from "../../userContext";

const Dashboard = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
    return (
        <div className="main-content">
            <div>
                <h1>Dashboard Page</h1>
                {isLoggedIn && (
                    <button onClick={() => setIsLoggedIn(false)}>
                        {" "}
                        sign off
                    </button>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
