import lareProfile from "./../../assets/fullProfile.png";
import Header from "./Header";
import Direct from "./Direct";

import Profile from "./Profile";
import { useContext } from "react";
import { AllOverContext } from "../../utils/OverallContext";
import AboutDetails from "../About/AboutDetails";
import Themer from "./Themer";
import ContactDetails from "../Contact/ContactDetails";

const Home = () => {
  const { isDark } = useContext(AllOverContext);

  return (
    <>
      <div
        className={`main relative w-full ${
          isDark ? "bg-[#313131] text-white" : "bg-white text-black"
        }`}
      >
        <Header isDark={isDark} />
        <Themer />

        <div className="main h-auto flex justify-evenly">
          <div className="main main flex flex-col items-center gap-5 justify-center w-full lg:flex-row">
            <div className="img-cont  lg:m-20 lg:rounded-xl flex justify-center lg:bg-[#fff0db] relative px-5 lg:shadow-md">
              <Profile />
              <img
                src={lareProfile}
                alt="my-profile"
                className="hidden w-[400px] h-[500px]  lg:block"
              />
            </div>

            <div className="description flex flex-col justify-center items-center gap-5 lg:w-2/5 lg:items-start p-5">
              <div className="text-center flex flex-col gap-5 lg:justify-start lg:items-start">
                <h1 className="text-7xl">Hello,</h1>
                <h2 className="text-3xl font-bold text-[#FF00FF] font-serif">
                  I AM PHINEHAS OSEI-TUTU
                </h2>
                <h2 className="text-3xl font-bold tracking-tight  ">
                  A FRONTEND DEVELOPER
                </h2>
              </div>
              <p className="text-lg text-center sm:mx-[10%]  lg:text-start lg:mx-0 lg:max-w-xl">
                {/* I am a frontend developer, resilience in nature,
                focused on utilizing my technical skills like the popular
                JavaScript library, React to build an amazing UI, high
                performance, and responsive website, and also making use of the
                CSS framework, TailwindCSS for simplicity{" "} */}
              </p>
              <Direct content="MORE ABOUT ME" />
            </div>
          </div>
        </div>
        <div className="about-me">
          <AboutDetails />
          <ContactDetails />
        </div>
      </div>
    </>
  );
};

export default Home;
