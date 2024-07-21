import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { useContext } from "react";
import { AllOverContext } from "../../utils/OverallContext";

const Header = () => {
  const { isDark } = useContext(AllOverContext);
  const { active, handleActive } = useContext(AllOverContext);
  return (
    <>
      <header
        className={`flex  justify-between lg:justify-around p-5 shadow-md items-center h-120   ${
          isDark ? "bg-[#282828]" : "bg-white"
        } `}
      >
        <h2 className="text-xl font-semibold text-[#FF00FF]">PhinePortfolio</h2>
        <div className="flex justify-center items-center">
          <nav className="hidden md:block">
            <ul className="flex gap-3">
              <Link
                to="/"
                className={`text-base ${
                  active === 1 ? "bg-[#FF00FF]" : ""
                } px-5 py-2 hover:bg-[#FF00FF] rounded-tl-2xl rounded-br-2xl font-semibold`}
                onClick={() => handleActive(1)}
              >
                <li>Home</li>
              </Link>

              <Link
                to="/about"
                className={`text-base ${
                  active === 2 ? "bg-[#FF00FF]" : ""
                } px-5 py-2 hover:bg-[#FF00FF] rounded-tl-2xl rounded-br-2xl font-semibold`}
                onClick={() => handleActive(2)}
              >
                <li>About</li>
              </Link>

              {/* <Link
                to="/"
                className={`text-base ${
                  active === 3 ? "bg-[#FF00FF]" : ""
                } px-5 py-2 hover:bg-[#FF00FF] rounded-tl-2xl rounded-br-2xl font-semibold`}
                onClick={() => handleActive(3)}
              >
                <li>Portfolio</li>
              </Link> */}

              <Link
                to="/contact"
                className={`text-base ${
                  active === 4 ? "bg-[#FF00FF]" : ""
                } px-5 py-2 hover:bg-[#FF00FF] rounded-tl-2xl rounded-br-2xl font-semibold`}
                onClick={() => handleActive(4)}
              >
                <li>Contact</li>
              </Link>
            </ul>
          </nav>
          <IoMdMenu size={30} className="cursor-pointer md:hidden" />
        </div>
      </header>
    </>
  );
};

export default Header;
