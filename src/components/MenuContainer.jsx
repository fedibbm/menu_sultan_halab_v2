import React from "react";
import "./MenuContainer.css";
import { CiGlobe } from "react-icons/ci";
import { FaGlobe } from "react-icons/fa";

const MenuContainer = ({ children }) => {
    return (
        <div className="z-10 relative">
            <div className="menu-container-before pr-16 pt-6">
                <div className="lang flex items-center w-full justify-end text-darkRed">
                    <div className="flex flex-col items-center">
                        <FaGlobe className="text-[1.6rem] font-extrabold"/> <p className="text[1.6rem]">FR</p>
                    </div>
                </div>
            </div>
            {children}
        </div>
    );
};

export default MenuContainer;
