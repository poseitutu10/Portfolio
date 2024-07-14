import { useContext } from "react";
import Direct from "../Home/Direct";
import Header from "../Home/Header";
import Profile from "../Home/Profile";
import Themer from "../Home/Themer";
import { AllOverContext } from "../../utils/OverallContext";

const About = () => {
  const { isDark } = useContext(AllOverContext);
  return (
    <>
      <div
        className={`main relative w-full ${
          isDark ? "bg-[#313131] text-white" : "bg-white text-black"
        } m-auto`}
      >
        <Header isDark={isDark} />
        <Themer />
        <div className="about h-[100vh] px-5 flex flex-col gap-5 ">
          <div>
            <h2 className="text-5xl font-semibold py-12 text-center">
              ABOUT <span className="text-[#FF00FF]">ME</span>
            </h2>
          </div>
          
          <div className="info flex flex-col gap-10">
            <h2 className="text-xl text-center font-semibold  tracking-wider">PERSONAL INFORMATION</h2>
            <div className="sm:hidden">
              <Profile />
            </div>
            <div className="details flex justify-evenly gap-4">
              <div className="left-detail w-1/4 flex flex-col gap-5 ">
                <div>
                  <h1 className="text-[#FF00FF] font-semibold text-lg">
                    First Name:
                  </h1>
                  <h1 className="text-lg">Phinehas</h1>
                </div>
                <div className="font-semibold ">
                  <h1 className="text-[#FF00FF] font-semibold text-lg">
                    Last Name:
                  </h1>
                  <h1 className="text-lg">Osei-Tutu</h1>
                </div>
                <div className="font-semibold ">
                  <h1 className="text-[#FF00FF] font-semibold text-lg">Age:</h1>
                  <h1 className="text-lg">22 Years</h1>
                </div>

                <div className="font-semibold ">
                  <h1 className="text-[#FF00FF] font-semibold text-lg">
                    Nationality:
                  </h1>
                  <h1 className="text-lg">Ghana</h1>
                </div>
              </div>
              <div className="right-detail w-1/4 flex flex-col gap-5">
                <div>
                  <h1 className="text-[#FF00FF] font-semibold text-lg">
                    Email:
                  </h1>
                  <h1 className="text-lg">phinehasoseitutu1@gmail.com</h1>
                </div>
                <div className="font-semibold ">
                  <h1 className="text-[#FF00FF] font-semibold text-lg">
                    Phone Number:
                  </h1>
                  <h1 className="text-lg">+233 550 493 688</h1>
                </div>
                <div className="font-semibold ">
                  <h1 className="text-[#FF00FF] font-semibold text-lg">
                    Language:
                  </h1>
                  <h1 className="text-lg">English</h1>
                </div>

                <div className="font-semibold ">
                  <h1 className="text-[#FF00FF] font-semibold text-lg">
                    LinkedIn:
                  </h1>
                  <a
                    href="https://www.linkedin.com/in/poseitutu10/"
                    target="_blank"
                    className="text-lg"
                  >
                    www.linkedin.com/in/poseitutu10/
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
