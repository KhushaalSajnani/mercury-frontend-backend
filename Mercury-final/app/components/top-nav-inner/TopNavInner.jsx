'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import '../top-nav/CSSheader.css'

import ProductsMenuApi from "../top-nav/productsMenuApi"
import ServicesMenuApi from "../top-nav/servicesMenuApi"
import CompanyMenuApi from "../top-nav/companyMenuApi"

import SingleColumnMenu from "../top-nav/SingleColumnMenu";
import svg from "../../../public/assets/logos/mercury-official-logo.svg"
import homesvg from "../../../public/assets/icons/Home.svg"

export default function TopNavInner() {
    const [productsMenuData] = useState(ProductsMenuApi);  
    const [servicesMenuData] = useState(ServicesMenuApi);
    const [companyMenuData] = useState(CompanyMenuApi);
    const [state, newState] = useState("mobile-menu-close");

    //const menu = document.querySelector(".menu");
    let subMenu;

    const clickedMenuMain = (e) => {
        if(!document.querySelector(".menu").classList.contains("active")){
            return;
        }
        if(e.target.closest(".menu-item-has-children")){
            const hasChildren = e.target.closest(".menu-item-has-children");
            showSubMenu(hasChildren);
        }
    };

    function toggleMenu(){
        console.log("inside toggle menu");
        document.querySelector(".menu").classList.toggle("active");
 	    document.querySelector(".menu-overlay").classList.toggle("active");
    }

    function showSubMenu(hasChildren){
        subMenu = hasChildren.querySelector(".sub-menu");
        subMenu.classList.add("active");
        subMenu.style.animation = "slideLeft 0.5s ease forwards";
        const menuTitle = hasChildren.querySelector("span").parentNode.childNodes[0].textContent;
        document.querySelector(".menu").querySelector(".current-menu-title").innerHTML=menuTitle;
         document.querySelector(".menu").querySelector(".mobile-menu-head").classList.add("active");
        // newState("mobile-menu-head active");
    }

    function  hideSubMenu(){  
        subMenu.style.animation = "slideRight 0.5s ease forwards";
        setTimeout(() =>{
        subMenu.classList.remove("active");	
        },0); 
        document.querySelector(".menu").querySelector(".current-menu-title").innerHTML="";
        document.querySelector(".menu").querySelector(".mobile-menu-head").classList.remove("active");
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 991) {
                if (document.querySelector(".menu").classList.contains("active")) {
                    toggleMenu();
                }
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            // Cleanup the event listener when the component is unmounted
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <header className="header" id="main_header">
            <div className="container z-30 w-full max-parent-grid-container-width m-auto">
                <div className="row v-center flex-row justify-between">
                    <div className="header-item item-left flex-row mobileHeaderCss">
                        <div className="logo">
                        <Link href="/">
                                <div
                                    style={{ width: 220, height: 50 }}
                                    className="logo-container cursor-pointer"
                                >
                                    <img
                                        src={homesvg.src}
                                        style={{ objectFit: "contain", width: "100%", height: "100%", objectPosition: "left" }}
                                    />
                                </div>
                            </Link>
                        </div>
                        <div className="mobile-menu-trigger" onClick={toggleMenu}><span /></div>
                    </div>
                    {/* <button
                    type="button"
                    className="membership-button cursor-pointer sm-screen-btn display-block"
                    >
                    Contact Us
                    </button> */}
                    {/* menu start here */}
                    <div className="header-item item-center">
                        <div className="menu-overlay" onClick={toggleMenu}></div>
                        <nav className="menu" onClick ={clickedMenuMain}>
                            <div className="mobile-menu-head">
                            <div className="go-back" onClick={hideSubMenu}>
                                <span className="bold">←</span>
                            </div>
                            <div className="current-menu-title" />
                            <div className={state} onClick={toggleMenu}>×</div>
                            </div>
                            <ul className="menu-main">
                                {/* <li className="menu-item-has-no-children" style={{ marginTop: 10 }}>
                                    <Link href="/">Home</Link>
                                </li> */}
                                <li>
                                    <a href="/pages/company">
                                        Company 
                                    </a>
                                </li>
                                <li>
                                    <a href="/pages/products">
                                        Products 
                                    </a>
                                </li>
                                <li>
                                    <a href="/pages/services">
                                        Services 
                                    </a>
                                </li>
                                <li>
                                    <a href="/pages/people">
                                        People 
                                    </a>
                                </li>
                                <li>
                                    <Link href="/pages/contact-us">
                                        <button
                                            type="button"
                                            className="w-full bg-black text-white rounded-md px-4 py-2 cursor-pointer"
                                        >
                                            Contact Us
                                        </button>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            </header>
        </>
    );
}
