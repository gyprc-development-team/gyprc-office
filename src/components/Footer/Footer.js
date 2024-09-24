import React from "react";
import logo from "../../components/assets/images/logdo2.png";
import logo1 from "../../components/assets/images/GYPRC png.png";
import logo2 from "../../components/assets/images/GYPRC png1.png";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className=" text-white bg-navbg1 py-2 ">
        <div className="container mx-auto flex flex-col lg:flex-row px-8 justify-between items-center">
          {/* logo */}
          <div className="mb-4 lg:mb-0">
            <img src={logo2} alt="CompanyLogo" className="h-[80px]" />
          </div>

          {/* Navigation Links */}
          {/* <nav className="mb-4  lg:mb-0">
            <ul className="flex max-sm:flex-row  gap-3 bg-orange-500 hover:bg-orange-400 py-2 px-4 rounded-sm ">
              <li className="">
                <NavLink to="/login" className=" text-xl hover:text-white">
                  Team Dashboard
                </NavLink>
              </li>
            </ul>
          </nav> */}
          <div className="SocialMedia">
            <div className="row">
              <ul className="flex gap-3">
                <li>
                  <a href="https://www.facebook.com/profile.php?id=61560769443450">
                    <AiFillFacebook className="text-4xl hover:text-blue-400 rounded" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/gyprcsocial">
                    <AiFillInstagram className="text-4xl hover:text-blue-400 rounded" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/103610182/admin/feed/posts/">
                    <AiFillLinkedin className="text-4xl hover:text-blue-400 rounded" />
                  </a>
                </li>
                {/* <li>
                  <a href="">
                    <AiFillTwitterSquare className="text-4xl hover:text-blue-400 rounded" />
                  </a>
                </li> */}
              </ul>
            </div>
          </div>

          {/* Address */}
          <div className="mb-4 lg:mb-0 flex flex-col  ">
            <p className="py-2">
              {" "}
              <CiLocationOn size={34} />
            </p>

            <p>B-99, 5th Floor, Phase-I Panchsheel Park</p>
            <p>Malviya Nagar, Near Triveni Complex New Delhi - 110017</p>
          </div>

          {/* Social Media Icons */}
          {/* <div>
            <a href="#" className="text-xl mr-4 hover:text-gray-400">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-xl mr-4 hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-xl hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
          </div> */}
        </div>
      </footer>
      <div className="contaienr mx-auto">
        <p className="text-black bg-orange-100 text-center py-2">
          GYPRC © 2024. All Rights Reserved.2024
        </p>
      </div>
    </>
  );
};

export default Footer;
