import React from "react";
import { navLink } from "../../store/navigation";
import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";
import { IoIosCall} from "react-icons/io";
import { GiRotaryPhone } from "react-icons/gi";
import { HiBuildingOffice } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Footer: React.FC = () => {
  const { t } = useTranslation("HeaderLang");
  return (
    <footer className="bg-[#4c75f6] py-8 dark:bg-[#7C96FF]">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-0 justify-between border-b-2 border-white py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 ">
            {navLink.map((item, i) => (
              <NavLink
                key={i}
                to={item.srcLink}
                className="px-2 py-2 text-white hover:underline hover:underline-offset-4 hover:decoration-white text-[14px] sm:text-[16px]"
              >
                {t(item.linkName)}
              </NavLink>
            ))}
          </div>
          <ul>
            <li className=" py-2 text-white">
              <a
                href="tel:+998712634198"
                className="flex items-center gap-2 hover:text-blue-300 transition text-[14px] sm:text-[16px]"
              >
                <IoIosCall size={20} color={"#fff"} />
                +998 (71) 263-41-98
              </a>
            </li>{" "}
            <li className=" py-2 text-white">
              <a
                href="mailto:info@airi.uz"
                className="flex items-center gap-2 hover:text-blue-300 transition text-[14px] sm:text-[16px]"
              >
                <MdEmail size={20} color={"#fff"} />
                info@airi.uz
              </a>
            </li>
            <li className=" py-2 text-white">
              <a
                href="https://t.me/airi_anticorruption_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-300 transition text-[14px] sm:text-[16px]"
              >
                <GiRotaryPhone size={20} color={"#fff"} />
                https://t.me/airi_anticorruption_bot
              </a>
            </li>
            <li className=" py-2 text-white">
              <a
                href="https://maps.google.com/?q=100125, Toshkent sh., Bo'z-2, 17A"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-300 transition text-[14px] sm:text-[16px]"
              >
                <HiBuildingOffice size={20} color={"#fff"} />
                100125, Toshkent sh., Bo'z-2, 17A
              </a>
            </li>
          </ul>
        </div>
        <div className="container mx-auto flex items-center w-full justify-center gap-2 py-4">
          <a href="https://t.me/airiuz"><FaTelegramPlane size={20} color={"#fff"} /></a>
          <a href="https://www.youtube.com/@airi_uz"><FaYoutube size={20} color={"#fff"} /></a>
          <a href="https://www.linkedin.com/company/airiuz/posts/?feedView=all"><FaLinkedin size={20} color={"#fff"} /></a>
          <a href="https://www.facebook.com/ai.uzbekistan?_rdr"><FaFacebook size={20} color={"#fff"} /></a>
          <a href="https://www.instagram.com/airi.uz"><FaInstagram size={20} color={"#fff"} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
