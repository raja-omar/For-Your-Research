import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosLogOut, IoIosArrowForward } from "react-icons/io";
import { IoLibrary } from "react-icons/io5";
import { BsArrowLeftShort } from "react-icons/bs";
import { HiMiniBars3 } from "react-icons/hi2";
import classNames from "classnames";
import { BiSolidDashboard } from "react-icons/bi";

interface Props {
  page: string;
}

const SideNavigationBar: React.FC<Props> = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [navWidth, setNavWidth] = useState(30);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    
   //setNavWidth(isCollapsed ? 72 : 250);
  }, [isCollapsed]);

  const handleSignOut = () => {

  }

  const navigationItems = [
    { icon: <BiSolidDashboard size={27} />, label: "Dashboard", path: "/dashboard" },
    { icon: <FaSearch size={27}/>, label: "Search", path: "/search" },
    { icon: <IoLibrary size={27}/>, label: "Library", path: "/library" },
  ];

  return (
    <div  className={`${isCollapsed ? " w-16" : "w-1/4"} min-w-min h-screen bg-white text-black border relative border-grey-30 duration-300`}>
      <div className="inline-flex items-center" >
        <h1 className={"text-black p-2 [font-family:'Manrope-Medium',Helvetica] font-medium text-xl"}>RH</h1> 
        <BsArrowLeftShort className={`absolute bg-white text-black text-lg rounded-full cursor-pointer  -right-3 top-3 border border-black  ${isCollapsed && "rotate-180"}`} onClick={handleToggleCollapse}/>
      </div>
      <ul className="py-4">
          {navigationItems.map((item, index) => (
            <li key={index} className={classNames("flex items-center py-4 px-4", { "text-purple-80": props.page === item.label })}>
              <span>{item.icon}</span>
              <span className={`ml-2 [font-family:'Manrope-Medium',Helvetica]  ${isCollapsed && "hidden"}`}>{item.label}</span>
            </li>
          ))}
      </ul>
      <div className="absolute bottom-4 p-4">
        <div className="flex items-center cursor-pointer" onClick={handleSignOut}>
          <IoIosLogOut size={27}/>
          {!isCollapsed && <span className="ml-2 [font-family:'Manrope-Medium',Helvetica]">Sign Out</span>}
        </div>
      </div>
    </div>
  );
};

export default SideNavigationBar;
/*
<HiMiniBars3 className="ml-2" size={27} onClick={handleToggleCollapse}/>

className={`bg-white text-black rounded-full absolute -right-3 top-9 cursor-pointer border border-black  ${isCollapsed && "rotate-180"}`}
<BsArrowLeftShort className={` bg-white text-black text-2xl rounded-full absolute cursor-pointer -right-3 top-9 border border-black  ${isCollapsed && "rotate-180"}`} onClick={handleToggleCollapse}/>
      
<div className={`relative h-screen bg-purple-20 text-black p-5 pt-8 ${isCollapsed ? "w-18" : "w-92"} duration-300 `}>
{!isCollapsed && <span className={classNames("ml-2 duration-300", { hidden: isCollapsed })}>{item.label}</span>} 
*/