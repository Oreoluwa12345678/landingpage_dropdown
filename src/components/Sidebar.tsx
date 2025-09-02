import close from "../assets/images/icon-close-menu.svg";
import iconDown from "../assets/images/icon-arrow-down.svg";
import todo from "../assets/images/icon-todo.svg";
import calender from "../assets/images/icon-calendar.svg";
import reminder from "../assets/images/icon-reminders.svg";
import planning from "../assets/images/icon-planning.svg";
import iconup from "../assets/images/icon-arrow-up.svg";
interface Sidebar {
  closeSidebar: () => void;
  handleFeature: () => void;
  handleCompany: () => void;
  feature: boolean;
  company: boolean;
}
const Sidebar: React.FC<Sidebar> = ({
  closeSidebar,
  handleCompany,
  handleFeature,
  feature,
  company,
}) => {
  return (
    <div className="fixed bg-black/50 inset-0 z-40">
      <div className="absolute top-0 right-0 h-full w-64 bg-white shadow-2xl p-6 z-50">
        <button className="ml-48 w-56 cursor-pointer" onClick={closeSidebar}>
          <img src={close} alt="" />
        </button>
        <ul className="flex flex-col gap-4">
          <li className="flex flex-col gap-4 items-start justify-start">
            <div className="flex gap-2 justify-start items-center">
              <a href="" className="text-sm text-gray-500 font-medium">
                Features
              </a>
              <button onClick={handleFeature} className="cursor-pointer">
                <img src={!feature ? iconDown : iconup} alt="" />
              </button>
            </div>
            {feature && (
              <div className="flex flex-col justify-start items-start gap-3 ml-4">
                <span className="flex justify-start items-start gap-4 ">
                  <img src={todo} alt="" />
                  <p className="text-sm font-medium text-gray-500 hover:text-gray-950">
                    Todo List
                  </p>
                </span>
                <span className="flex justify-start items-start gap-4 ">
                  <img src={calender} alt="" />
                  <p className="text-sm font-medium text-gray-500">Calendar</p>
                </span>
                <span className="flex justify-start items-start gap-4">
                  <img src={reminder} alt="" />
                  <p className="text-sm font-medium text-gray-500">Reminders</p>
                </span>
                <span className="flex justify-start items-start gap-4">
                  <img src={planning} alt="" />
                  <p className="text-sm font-medium text-gray-500">Planning</p>
                </span>
              </div>
            )}
          </li>
          <li className="flex flex-col gap-4 items-start justify-start">
            <div className="flex gap-2 justify-start items-center">
              <a href="" className="text-sm text-gray-500 font-medium">
                Company
              </a>
              <button onClick={handleCompany} className="cursor-pointer">
                <img src={!company ? iconDown : iconup} alt="" />
              </button>
            </div>
            {company && (
              <div className="flex flex-col justify-start items-start gap-3 ml-4">
                <p className="text-sm font-medium text-gray-500">History</p>
                <p className="text-sm font-medium text-gray-500">Our Team</p>
                <p className="text-sm font-medium text-gray-500">Blog</p>
              </div>
            )}
          </li>
          <li>
            <a href="" className="text-sm text-gray-500 font-medium">
              Careers
            </a>
          </li>
          <li>
            <a href="" className="text-sm text-gray-500 font-medium">
              About
            </a>
          </li>
        </ul>
        <span className="flex flex-col justify-center items-center mt-4 gap-3">
          <button className="text-sm text-gray-500 font-medium">Login</button>
          <button className="text-sm text-gray-500 font-medium border-2 w-full h-10 rounded-xl">
            Register
          </button>
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
