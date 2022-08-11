import React from "react";
import BitcoinPrice from "./components/bitcoin/BitcoinPrice";
import Counter from "./components/counter/Counter";

const Dashboard = () => {
   return(
    <div className="container">
      <Counter/>
      <BitcoinPrice/>
    </div>
   )
};

export default Dashboard;
