import React, { useState } from "react";
import SideNavigationBar from "./components/Navigation/SideNavigationBar";
import Search from "./pages/Search";

import Header from "./components/Header/Header";
import NavigationBar from "./components/Navigation/NavigationBar";
import Item from "./components/Paper/Item";

function App() {
  const [currentPage, setcurrentPage] = useState("Search");

  return (
    <div className="flex">
      <NavigationBar page={currentPage} />
      {/* <SideNavigationBar page={currentPage} /> */}
      <div className="flex-1">
        <Header page={currentPage} />
        <Search />
      </div>
    </div>
  );
}

export default App;
