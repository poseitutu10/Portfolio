import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="pb-20">
        <div className="flex justify-center gap-5">
          <p className="text-sm text-center">
            Designed by{" "}
            <Link to="https://www.linkedin.com/in/poseitutu10/">
              Phinehas Osei-Tutu
            </Link>
          </p>
          <p className="text-sm text-center">
            Copyright © 2023 All rights reserved
          </p>
        </div>
        <div className="flex justify-center gap-5 my-5">
          <Link to="https://www.linkedin.com/in/poseitutu10/">
            <img
              src="https://img.shields.io/badge/linkedin-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
              alt="linkedin"
            />
          </Link>
          <Link to="https://github.com/poseitutu10/Portfolio">
            <img
              src="https://img.shields.io/badge/github-100000?style=for-the-badge&logo=github&logoColor=white"
              alt="github"
            />
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
