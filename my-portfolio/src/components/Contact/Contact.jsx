import { AllOverContext } from "../../utils/OverallContext";
import { useContext } from "react";
import Header from "../Home/Header";
import Themer from "../Home/Themer";
import ContactDetails from "./ContactDetails";
import Footer from "../Home/Footer";

const Contact = () => {
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
        <ContactDetails />
        <Footer />
      </div>
    </>
  );
};

export default Contact;
