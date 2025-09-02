import logo from "../assets/images/logo.svg";
import iconDown from "../assets/images/icon-arrow-down.svg";
import todo from "../assets/images/icon-todo.svg";
import calender from "../assets/images/icon-calendar.svg";
import reminder from "../assets/images/icon-reminders.svg";
import planning from "../assets/images/icon-planning.svg";
import iconup from "../assets/images/icon-arrow-up.svg";
import menu from "../assets/images/icon-menu.svg";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const Header = () => {
  const [feature, setFeature] = useState(false);
  const [company, setCompany] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const handleFeature = () => {
    setFeature(!feature);
    setCompany(false);
  };
  const handleCompany = () => {
    setCompany(!company);
    setFeature(false);
  };
  const openSidebar = () => {
    setSidebar(true);
  };
  const closeSidebar = () => {
    setSidebar(false);
  };
  useEffect(() => {
    const handleWidth = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWidth);
    return () => window.removeEventListener("resize", handleWidth);
  }, []);

  return (
    <header className="flex justify-between  w-11/12 ml-auto mr-auto h-20 items-center  ">
      <span className="flex justify-center items-center gap-16">
        <img src={logo} alt="" />

        <ul className="hidden md:flex gap-9">
          <li className="relative flex justify-center items-center gap-2">
            <a
              href=""
              className="text-gray-500 text-sm font-medium hover:text-gray-950"
            >
              Features
            </a>
            <img
              src={feature ? iconup : iconDown}
              alt=""
              onClick={handleFeature}
            />

            <div
              className={`absolute top-10 right-0 flex-col justify-center items-start gap-2.5 w-36 bg-white shadow-2xl h-36 p-6 rounded-md  ${
                feature ? "flex" : "hidden"
              }`}
            >
              <span className="flex justify-between items-center gap-4 ">
                <img src={todo} alt="" />
                <p className="text-sm font-medium text-gray-500 hover:text-gray-950">
                  Todo List
                </p>
              </span>
              <span className="flex justify-between items-center gap-4 ">
                <img src={calender} alt="" />
                <p className="text-sm font-medium text-gray-500">Calendar</p>
              </span>
              <span className="flex justify-between items-center gap-4">
                <img src={reminder} alt="" />
                <p className="text-sm font-medium text-gray-500">Reminders</p>
              </span>
              <span className="flex justify-center items-center gap-4">
                <img src={planning} alt="" />
                <p className="text-sm font-medium text-gray-500">Planning</p>
              </span>
            </div>
          </li>
          <li className="relative flex justify-center items-center gap-2">
            <a
              href=""
              className="text-gray-500 text-sm font-medium hover:text-gray-950"
            >
              Company
            </a>
            <img
              src={company ? iconup : iconDown}
              alt=""
              onClick={handleCompany}
            />
            <div
              className={`absolute top-10 flex flex-col justify-center items-start gap-2 w-28 bg-white shadow-2xl h-24 p-6 rounded-md right-0 ${
                company ? "flex" : "hidden"
              }`}
            >
              <p className="text-sm text-gray-500">History</p>
              <p className="text-sm text-gray-500">Our Team</p>
              <p className="text-sm text-gray-500">Blog</p>
            </div>
          </li>
          <li>
            <a
              href=""
              className="text-gray-500 text-sm font-medium hover:text-gray-950"
            >
              Careers
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-gray-500 text-sm font-medium hover:text-gray-950"
            >
              About
            </a>
          </li>
        </ul>
      </span>
      <span className="hidden md:flex justify-center items-center gap-7">
        <button className="text-base font-medium text-gray-500 hover:cursor-pointer hover:text-gray-950">
          Login
        </button>
        <button className="text-base font-medium text-gray-500 border-2 border-gray-500 py-2 px-5 rounded-2xl hover:border-gray-950 hover:text-gray-950 hover:cursor-pointer">
          Register
        </button>
      </span>

      <img
        src={menu}
        alt=""
        className="md:hidden block cursor-pointer"
        onClick={openSidebar}
      />
      {width < 768 && sidebar && (
        <Sidebar
          closeSidebar={closeSidebar}
          handleFeature={handleFeature}
          handleCompany={handleCompany}
          feature={feature}
          company={company}
        />
      )}
    </header>
  );
};

export default Header;
