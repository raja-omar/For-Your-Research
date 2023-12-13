import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import StoreDataPage from "./pages/StoreDataPage";
import Header from "./components/Header";
import Search from "./pages/Search";

function App() {
  const [currentPage, setcurrentPage] = useState("Save records");

  return (
    <Router>
      <div className="flex">
        <NavigationBar page={currentPage} />
        {/* <SideNavigationBar page={currentPage} /> */}
        <div className="flex-1">
          <Header page={currentPage} />
          <Routes>
            <Route path="/storedata" element={<StoreDataPage />} />
            <Route path="/" element={<Search />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
