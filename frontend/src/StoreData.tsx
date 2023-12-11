import { useState } from "react";

import Header from "./components/Header/Header";
import NavigationBar from "./components/Navigation/NavigationBar";
import CrudComponent from "./pages/StoreDataComponent";

function App() {
  const [currentPage, setcurrentPage] = useState("Save records");

  return (
    <div className="flex">
      <NavigationBar page={currentPage} />
      {/* <SideNavigationBar page={currentPage} /> */}
      <div className="flex-1">
        <Header page={currentPage} />
        <CrudComponent />
      </div>
    </div>
  );
}

export default App;
