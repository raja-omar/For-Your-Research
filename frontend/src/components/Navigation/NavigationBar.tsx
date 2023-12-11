import { useState } from "react";
import NavigationItem from "./NavigationItem";
import { BsArrowLeftShort } from "react-icons/bs";

export default function NavigationBar(props: any): JSX.Element {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`${
        isCollapsed ? " w-16" : "w-44"
      } flex flex-col gap-12 bg-bg-dark relative duration-300`}
    >
      <div className="flex justify-between p-3">
        <h1 className="text-white font-semibold text-lg">FYR</h1>
        <BsArrowLeftShort
          className={`absolute bg-white text-black text-lg rounded-full cursor-pointer  -right-3 top-4 border border-black  ${
            isCollapsed && "rotate-180"
          }`}
          onClick={handleToggleCollapse}
        />
      </div>
      <ul className="flex flex-1 flex-col gap-5 px-5">
        <li>
          <NavigationItem
            link="dashboard"
            name="Dashboard"
            activePage={props.page}
            isCollapsed={isCollapsed}
          />
        </li>
        <li>
          <NavigationItem
            link="search"
            name="Search"
            activePage={props.page}
            isCollapsed={isCollapsed}
          />
        </li>
        <li>
          <NavigationItem
            link="library"
            name="Library"
            activePage={props.page}
            isCollapsed={isCollapsed}
          />
        </li>
        <li>
          <NavigationItem
            link="collaborators"
            name="Collaborators*"
            activePage={props.page}
            isCollapsed={isCollapsed}
          />
        </li>
      </ul>
      <ul className="flex flex-col gap-8 px-5 pb-5">
        <li>
          <NavigationItem
            link="help"
            name="Help"
            activePage={props.page}
            isCollapsed={isCollapsed}
          />
        </li>
        <li>
          <NavigationItem
            link="signout"
            name="Sign out"
            activePage={props.page}
            isCollapsed={isCollapsed}
          />
        </li>
      </ul>
    </div>
  );
}
