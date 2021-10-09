import React, { useState, useEffect, Fragment } from 'react'
import logo from '../../assets/image/logo.png'
import { Popover, Transition } from "@headlessui/react"
import { IconContext } from "react-icons";
import { AiOutlineMenu, AiOutlineClose, AiOutlineStar } from "react-icons/ai"
import { secondary } from '../../utils/colors';
import {
   useLocation
} from "react-router-dom";
import "./Header.css"

const Header = () => {

    const location = useLocation()
    const navItems = [
        {
            "href": "/test",
            "name": "Réactions"   
        },
        {
            "href": "#",
            "name": "Divertissement"   
        },
        {
            "href": "#",
            "name": "Sport"   
        },
        {
            "href": "#",
            "name": "Sticker"   
        },
        {
            "href": "#",
            "name": "Artistes"   
        }
    ]

    useEffect(() => {        
        const item = document.getElementsByClassName("nav-item");
        for (let i = 0; i < item.length; i++) {
            item[i].classList.remove("active");
        }
        for (let i = 0; i < item.length; i++) {
            console.log(item[i].getAttribute("href"), " = ", location.pathname)
            if (item[i].getAttribute("href") === location.pathname) {
                item[i].classList.add("active");
            }
        }
    }, [])


    return (
        <>
        <IconContext.Provider value={{ color: secondary }}>
            <Popover className="relative bg-primary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center border-b-4 border-secondary py-6 md:justify-start md:space-x-10">
                        
                        {/* logo container */}
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <a href="/">
                                <span className="sr-only">logo</span>
                                <img 
                                    className="h-14 w-auto sm:h-20"
                                    src={logo}
                                    alt="logo"
                                />
                            </a>
                        </div>

                        {/* button to open nav on mobile */}
                        <div className="-mr-2 -my-2 md:hidden">
                            <Popover.Button className="p-2 inline-flex items-center justify-center">
                                <span className="sr-only">open mobile menu</span>
                                <AiOutlineMenu className="h-6 w-6" aria-hidden="true"/>
                            </Popover.Button>
                        </div>

                        {/* navitem container hidden on mobile */}
                        <div className="hidden md:flex space-x-10">
                            {/* navitem */}
                            
                            {navItems.map((navItem, index) => {
                                return (
                                    <a href={navItem.href} name={navItem.name} className="text-base font-medium text-white nav-item py-2">
                                        {navItem.name}
                                    </a>
                                )
                            })}

                        </div>                        
                    </div>

                    <Transition
                        as={Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel focus className="absolute top-0 inset-x-0 transition transform origin-top-right md:hidden">
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-primary divide-y-2 divide-gray-50">
                                <div className="pt-5 pb-6 px-5">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <img
                                                className="h-12 w-auto"
                                                src={logo}
                                                alt="icon mobile menu"
                                            />
                                        </div>
                                        <div className="-mr-2">
                                            <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center">
                                                <span className="sr-only">Close menu</span>
                                                <AiOutlineClose className="h-6 w-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <nav className="grid gap-y-8">

                                            {navItems.map((item, index) => {
                                                return (
                                                    <a href={item.href} className="-m-3 p-3 flex items-center rounded-md">
                                                        <AiOutlineStar className="flex-shrink-0 h-6 w-6"/>
                                                        <span className="ml-3 text-base font-medium text-white">{item.name}</span>
                                                    </a>   
                                                ) 
                                            })}

                                        </nav>
                                    </div>
                                </div>
                                
                                <div className="py-6 px-5 space-y-5">
                                <div>
                                    <a
                                        href="#"
                                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-secondary hover:bg-secondary-dark"
                                    >
                                        Inscrivez-vous
                                    </a>
                                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                                        Déjà inscrit ?{" "}
                                        <a href="#" className="text-secondary hover:text-secondary-dark">
                                            Connectez-vous
                                        </a>
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel> 
                    </Transition>              

                </div>
            </Popover>
        </IconContext.Provider>
        </>
    )
}

export default Header;
